import { cleanCSS, penthouse } from "../../services";
import { withCatch, extractErrors } from "../../../utils";

const mutation = async (root, { input: { url } }, context, info) => {
  const generateCCSS = async targetURL => cleanCSS(await penthouse(targetURL));

  const [error, results] = await withCatch(generateCCSS(url));

  if (error) {
    return { ok: false, errors: extractErrors(error) };
  }

  const { styles } = results;
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
