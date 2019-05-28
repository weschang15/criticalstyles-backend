import { Cache, cleanCSS, penthouse } from "../../services";
import { withCatch, extractErrors } from "../../../utils";

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
  const generateCCSS = async targetURL => {
    const existingCCSS = await cache.get(targetURL);
    if (existingCCSS) {
      // set some sort of logging
      return existingCCSS;
    }

    const { styles } = cleanCSS(await penthouse(targetURL));
    if (styles.length) {
      // set some sort of logging
      cache.set(targetURL, styles);
    }

    return styles;
  };

  const [error, styles] = await withCatch(generateCCSS(url));

  if (error) {
    return { ok: false, errors: extractErrors(error) };
  }

  const stylesheet = {
    styles,
    viewport: {
      height: 900,
      width: 1300
    }
  };

  return { ok: !!stylesheet, stylesheet };
};

export default mutation;
