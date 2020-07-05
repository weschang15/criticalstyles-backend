import { serviceQueue } from "../../../queues";

/**
 * Mutation resolver for creating a new Page document which will automatically start generating Critical CSS
 *
 * @param {Object} parent parent element, however, we do not have a parent with this GQL Type
 * @param {Object} args request arguments
 * @param {Object} context data shared between all resolvers
 * @param {Object} info metadata
 * @return {Object}
 */
const mutation = async (_, { input }, context, info) => {
  const { queue, queueName } = serviceQueue;
  const { _id: pageId, url: pageUrl } = input;

  queue.add(
    queueName,
    {
      pageId: pageId,
      pageUrl: pageUrl,
    },
    {
      removeOnComplete: true,
    }
  );

  return { ok: true };
};

export default mutation;
