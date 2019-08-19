import { withCatch, extractErrors } from "../../../utils";

const logout = async (_, __, { session }) => {
  if (!session || !session.user) {
    return { ok: true };
  }

  function destroy(currentSession) {
    return new Promise((resolve, reject) => {
      currentSession.destroy(err => {
        if (err) {
          return reject(err);
        }

        return resolve(true);
      });
    });
  }

  const [error] = await withCatch(destroy(session));
  return error ? { ok: false, errors: extractErrors(error) } : { ok: true };
};

export default logout;
