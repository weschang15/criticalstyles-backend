import { serviceQueue } from "../../../queues";
import createPubsub from "../../../shared/redis/createPubSub";
import { PAGE_ADDED } from "../../../shared/redis/events";
import { extractErrors, withCatch } from "../../../utils";

const pubsub = createPubsub();

/**
 * Mutation resolver for creating a new Page document which will automatically start generating Critical CSS
 *
 * @param {Object} parent parent element, however, we do not have a parent with this GQL Type
 * @param {Object} args request arguments
 * @param {Object} context data shared between all resolvers
 * @param {Object} info metadata
 * @return {Object}
 */
const mutation = async (
  _,
  { input },
  { models: { Page, Site }, session },
  info
) => {
  const { queue, queueName } = serviceQueue;
  async function createPage({ name, url, siteId }) {
    const site = await Site.findById(siteId);
    const newPage = new Page({ name, url, site });
    await site.updateOne({ $push: { pages: newPage } });

    return newPage.save();
  }

  const [error, page] = await withCatch(createPage(input));

  if (error) {
    return { ok: false, errors: extractErrors(error) };
  }

  queue.add(queueName, {
    pageId: page._id,
    pageUrl: page.url,
    viewport: input.viewport
  });

  pubsub.publish(PAGE_ADDED, {
    accountId: session.account._id,
    siteId: input.siteId,
    pageAdded: page
  });

  return { ok: true, page };
};

export default mutation;
