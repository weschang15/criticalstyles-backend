import session from "../session";

function getCurrentSession(req) {
  return new Promise((resolve, reject) => {
    session(req, {}, () => {
      if (!req.session.user) {
        return reject(new Error("Unauthenticated user."));
      }

      return resolve({ user: req.session.user, account: req.session.account });
    });
  });
}

export default getCurrentSession;
