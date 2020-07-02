import { extractErrors, withCatch } from "../../../utils";

const login = async (_, { input }, { models: { User }, req }) => {
  const authenticate = (params) => User.authenticate({ ...params });
  const [error, auth] = await withCatch(authenticate(input));

  if (error) {
    return { ok: false, errors: extractErrors(error) };
  }

  req.session.user = auth.user;
  req.session.account = auth.account;
  return { ok: true, auth };
};

export default login;
