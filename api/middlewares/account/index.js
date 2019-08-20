import { object, string } from "yup";
import { withCatch, extractErrors } from "../../../utils";

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

const middleware = {
  Mutation: {
    createAccount: async (resolve, parent, args, context, info) => {
      const input = { name: args.input.name, ...args.input.user };
      const validate = () => schema.validate(input, { abortEarly: false });
      const [err] = await withCatch(validate());

      if (err) return { ok: false, errors: extractErrors(err) };
      return resolve(parent, args, context, info);
    }
  }
};

export default middleware;
