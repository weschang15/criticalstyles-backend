import createPubsub from "../../../shared/redis/createPubSub";
import { SITE_ADDED } from "../../../shared/redis/events";
import { extractErrors, withCatch } from "../../../utils";

const pubsub = createPubsub();

/**
 * Mutation resolver for creating a new Site document for storing organizing, and maintaining CCSS
 *
 * @param {Object} _ parent element, however, we do not have a parent with this GQL Type
 * @param {Object} args request arguments
 * @param {Object} context data shared between all resolvers
 * @param {Object} info metadata
 * @return {Object}
 */
const mutation = async (
  _,
  { input },
  { models: { Site }, session, user, account }
) => {
  async function createSite(input) {
    const { ...rest } = input;
    const newSite = new Site({ ...rest, owner: user, account });
    const site = await newSite.save();

    return site;
  }

  const [error, site] = await withCatch(createSite(input));

  if (error) {
    return { ok: false, errors: extractErrors(error) };
  }

  pubsub.publish(SITE_ADDED, {
    accountId: session.account._id,
    siteAdded: site
  });

  return { ok: true, site };
};

export default mutation;
