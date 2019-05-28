import { Cache, cleanCSS, penthouse } from "../../services";
import { createCCSSResponse, withCatch, extractErrors } from "../../../utils";

/**
 * Resolver responsible for triggering CCSS service, caching response or retrieving the cached response
 * for the user defined target URL
 *
 * @param {Object} _ parent element, however, we do not have a parent with this GQL Type
 * @param {Object} args request arguments
 * @param {Object} context data shared between all resolvers
 * @param {Object} info metadata
 * @return {Object}
 */
const mutation = async (_, { input: { url } }, context, info) => {
  const cache = new Cache();
  const generateCCSS = async targetURL => cleanCSS(await penthouse(targetURL));
  const cacheNewCCSS = (targetURL, styles) => cache.set(targetURL, styles);

  const getCCSS = async targetURL => {
    const { styles } = await generateCCSS(targetURL);
    // Returns OK if the cache was successfully set
    const cacheResponse = await cacheNewCCSS(targetURL, styles);
    return styles;
  };

  const [error, styles] = await withCatch(getCCSS(url));

  if (error) {
    return { ok: false, errors: extractErrors(error) };
  }

  const stylesheet = createCCSSResponse(styles);
  return { ok: true, stylesheet };
};

export default mutation;
