import { extractErrors } from "../../../utils";

const requireAccountOwner = (fn) => (resolve, parent, args, ctx, info) => {
  try {
    const { account, user } = ctx;
    if (user._id.toString() !== account.owner.toString()) {
      throw new Error(
        "Permission denied. Must be account owner to generate API keys."
      );
    }

    return fn(resolve, parent, args, ctx, info);
  } catch (error) {
    return { ok: false, errors: extractErrors(error) };
  }
};

export default requireAccountOwner;
