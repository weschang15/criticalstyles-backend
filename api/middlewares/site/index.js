import { object, string } from "yup";
import requireUser from "../auth/requireUser";

const schema = object().shape({
  name: string()
    .trim()
    .required(),
  url: string()
    .trim()
    .url()
    .required(),
  accountId: string()
    .trim()
    .required()
});

const middleware = {
  Mutation: {
    createSite: requireUser(async (resolve, parent, args, context, info) => {
      const validate = input => schema.validate(input, { abortEarly: false });
      const [err] = await withCatch(validate(args.input));

      if (err) return { ok: false, errors: extractErrors(err) };
      return resolve(parent, args, context, info);
    })
  }
};

export default middleware;
