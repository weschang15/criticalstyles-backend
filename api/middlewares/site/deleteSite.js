import { object, string } from "yup";
import { extractErrors, withCatch } from "../../../utils";
import requireAccountOwner from "../auth/requireAccountOwner";
import requireUser from "../auth/requireUser";

const schema = object().shape({
  _id: string().trim().required(),
});

export default requireUser(
  requireAccountOwner(async (resolve, parent, args, context, info) => {
    const validate = (input) => schema.validate(input, { abortEarly: false });
    const [err, result] = await withCatch(validate(args.input));

    if (err) return { ok: false, errors: extractErrors(err) };

    const updatedArgs = { ...args, input: { ...args.input, ...result } };
    return resolve(parent, updatedArgs, context, info);
  })
);
