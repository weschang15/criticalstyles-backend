import { withCatch, extractErrors } from "../../../utils";

const auth = async (_, __, { session }) => {
  function findMe() {
    if (!session.user) {
      return Promise.reject(new Error("User not currently signed in."));
    }

    if (!session.account) {
      return Promise.reject(new Error("Could not get account details."));
    }

    return Promise.resolve({ user: session.user, account: session.account });
  }

  const [error, result] = await withCatch(findMe());
  return error
    ? { ok: false, errors: extractErrors(error) }
    : { ok: true, auth: result };
};

export default auth;
