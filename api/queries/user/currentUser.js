import { withCatch, extractErrors } from "../../../utils";

const currentUser = async (_, __, { req }, info) => {
  function findMe() {
    const { user } = req;
    if (!user) {
      return Promise.reject(new Error("Unauthorized user."));
    }

    return Promise.resolve(user);
  }

  const [error, user] = await withCatch(findMe());
  return error
    ? { ok: false, errors: extractErrors(error) }
    : { ok: true, user };
};

export default currentUser;
