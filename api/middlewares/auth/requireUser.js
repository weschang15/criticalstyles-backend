import { extractErrors } from "../../../utils";

const requireAuth = fn => (resolve, parent, args, ctx, info) => {
  try {
    const { session } = ctx;
    if (!session || !session.user) {
      throw new Error("Unauthenticated user.");
    }

    return fn(resolve, parent, args, ctx, info);
  } catch (error) {
    return { ok: false, errors: extractErrors(error) };
  }
};

export default requireAuth;
