import { object, string } from "yup";
import { createCCSSResponse, extractErrors, withCatch } from "../../../utils";
import { Cache } from "../../services";
import requireUser from "../auth/requireUser";

const schema = object().shape({
  url: string()
    .trim()
    .url()
    .required()
});

export default requireUser(async (resolve, parent, args, context, info) => {
  const cache = new Cache();
  const validate = input => schema.validate(input, { abortEarly: false });
  const [validationError, result] = await withCatch(validate(args.input));

  if (validationError) {
    return { ok: false, errors: extractErrors(validationError) };
  }

  const { url } = result;
  const getCachedStyles = targetURL => cache.get(targetURL);
  const [error, response] = await withCatch(getCachedStyles(url));

  if (error) {
    return { ok: false, errors: extractErrors(error) };
  }

  if (response) {
    const stylesheet = createCCSSResponse(JSON.parse(response));
    return { ok: true, stylesheet };
  }

  const updatedArgs = { ...args, input: { ...args.input, ...result } };
  return resolve(parent, updatedArgs, context, info);
});
