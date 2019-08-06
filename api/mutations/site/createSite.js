import { withCatch, extractErrors } from "../../../utils";

/**
 * Mutation resolver for creating a new Site document for storing organizing, and maintaining CCSS
 *
 * @param {Object} _ parent element, however, we do not have a parent with this GQL Type
 * @param {Object} args request arguments
 * @param {Object} context data shared between all resolvers
 * @param {Object} info metadata
 * @return {Object}
 */
const mutation = async (_, { input }, { models: { Site } }, info) => {
  async function createSite(input) {
    const site = new Site({ ...input });
    const result = await site.save();
    return result;
  }

  const [error, site] = await withCatch(createSite(input));

  if (error) {
    return { ok: false, errors: extractErrors(error) };
  }

  return { ok: true, site };
};

export default mutation;
