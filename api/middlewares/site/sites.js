import { object, string } from "yup";
import { extractErrors, withCatch } from "../../../utils";
import requireUser from "../auth/requireUser";

const schema = object().shape({
  after: string().trim()
});

const middleware = requireUser(async (resolve, parent, args, context, info) => {
  const validate = input => schema.validate(input, { abortEarly: false });
  const [err, result] = await withCatch(validate(args.filter));

  if (err) return { ok: false, errors: extractErrors(err) };

  const updatedArgs = { ...args, filter: { ...args.filter, ...result } };
  return resolve(parent, updatedArgs, context, info);
});

export default middleware;
