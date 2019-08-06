import { Cache, cleanCSS, penthouse } from "../../services";
import { createCCSSResponse, withCatch, extractErrors } from "../../../utils";

const setCache = (inputUrl, inputViewport) => {
  const cache = new Cache();
  return cache.set(inputUrl, inputViewport);
};

const runServices = async (inputUrl, inputViewport) =>
  cleanCSS(await penthouse(inputUrl, inputViewport));

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
const mutation = async (_, { input: { url, viewport } }, context, info) => {
  const getCCSS = async (inputUrl, inputViewport) => {
    const data = await runServices(inputUrl, inputViewport);
    const { styles, stats } = data;
    stats.viewport = inputViewport;

    const ccss = { styles, stats };
    // Returns OK if the cache was successfully set
    const cached = await setCache(inputUrl, JSON.stringify(ccss));

    return ccss;
  };

  const [error, response] = await withCatch(getCCSS(url, viewport));

  if (error) {
    return { ok: false, errors: extractErrors(error) };
  }

  const stylesheet = createCCSSResponse(response);
  return { ok: true, stylesheet };
};

export default mutation;
