import { uncategorizedServiceQueue } from "../../../queues";

/**
 * Resolver for creating a new Queue job that will generate CCSS for the provided URL and viewport settings
 * This will return a generic Response since the middleware that runs before this will return the CCSS found in Redis if it exists
 *
 * @param {Object} _ parent element, however, we do not have a parent with this GQL Type
 * @param {Object} args request arguments
 * @param {Object} context data shared between all resolvers
 * @param {Object} info metadata
 * @return {Object} Generic Response
 */
const mutation = async (_, { input: { url, viewport } }, { session }, info) => {
  const { queue, queueName } = uncategorizedServiceQueue;

  // Add user data to queue that handles CCSS for uncategorized requests
  queue.add(queueName, {
    accountId: session.account._id,
    pageUrl: url,
    viewport
  });

  return { ok: true };
};

export default mutation;
