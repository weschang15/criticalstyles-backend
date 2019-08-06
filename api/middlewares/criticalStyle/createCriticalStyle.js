import { Cache } from "../../services";
import { createCCSSResponse, withCatch, extractErrors } from "../../../utils";

const middleware = async (resolve, parent, args, context, info) => {
  const cache = new Cache();
  const {
    input: { url }
  } = args;

  const getCachedStyles = targetURL => cache.get(targetURL);
  const [error, response] = await withCatch(getCachedStyles(url));

  if (error) {
    return { ok: false, errors: extractErrors(error) };
  }

  if (response) {
    const stylesheet = createCCSSResponse(JSON.parse(response));
    return { ok: true, stylesheet };
  }

  return resolve(parent, args, context, info);
};

export default middleware;
