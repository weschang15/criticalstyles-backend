import session from "../session";

function getCurrentSession(req) {
  return new Promise((resolve, reject) => {
    session(req, {}, () => {
      if (!req.session.user) {
        reject(new Error("Unauthenticated user."));
      }

      resolve({ user: req.session.user, account: req.session.account });
    });
  });
}

export default getCurrentSession;
