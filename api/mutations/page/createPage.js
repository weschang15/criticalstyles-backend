import { withCatch, extractErrors } from "../../../utils";
import { cleanCSS, penthouse } from "../../services";

/**
 * Mutation resolver for creating a new Page document which will automatically start generating Critical CSS
 *
 * @param {Object} parent parent element, however, we do not have a parent with this GQL Type
 * @param {Object} args request arguments
 * @param {Object} context data shared between all resolvers
 * @param {Object} info metadata
 * @return {Object}
 */
const mutation = async (_, { input }, { models: { Page } }, info) => {
  async function generateStyles({ url, viewport }) {
    return cleanCSS(await penthouse(url, viewport));
  }

  async function createPage({ name, url, viewport }) {
    const { styles, stats } = await generateStyles({ url, viewport });
    const newPage = new Page({ name, url, stylesheet: { styles, stats } });

    return newPage.save();
  }

  const [error, page] = await withCatch(createPage(input));
  if (error) {
    return { ok: false, errors: extractErrors(error) };
  }

  return { ok: true, page };
};

export default mutation;
