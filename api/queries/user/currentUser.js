import { withCatch, extractErrors } from "../../../utils";

const currentUser = async (_, __, { session }) => {
  function findMe() {
    if (!session.user) {
      return Promise.reject(new Error("User not currently signed in."));
    }

    return Promise.resolve(session.user);
  }

  const [error, user] = await withCatch(findMe());
  return error
    ? { ok: false, errors: extractErrors(error) }
    : { ok: true, user };
};

export default currentUser;
