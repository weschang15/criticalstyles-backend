import { object, string } from "yup";
import { extractErrors, withCatch } from "../../../utils";

const schema = object().shape({
  name: string()
    .trim()
    .required(),
  firstName: string()
    .trim()
    .required(),
  lastName: string()
    .trim()
    .required(),
  email: string()
    .trim()
    .email()
    .required(),
  password: string()
    .trim()
    .min(8)
    .max(1024)
    .required()
});

const middleware = async (resolve, parent, args, context, info) => {
  const input = { name: args.input.name, ...args.input.user };
  const validate = () => schema.validate(input, { abortEarly: false });
  const [err, result] = await withCatch(validate());

  if (err) return { ok: false, errors: extractErrors(err) };

  const updatedArgs = { ...args, input: { ...args.input, ...result } };
  return resolve(parent, updatedArgs, context, info);
};

export default middleware;
