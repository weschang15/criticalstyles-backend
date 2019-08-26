import { extractErrors, withCatch } from "../../../utils";

const login = async (_, { input }, { models: { User }, req }) => {
  const authenticate = params => User.authenticate({ ...params });
  const [error, { user, account }] = await withCatch(authenticate(input));

  if (error) {
    return { ok: false, errors: extractErrors(error) };
  }

  req.session.user = user;
  req.session.account = account;
  return { ok: true, auth: { user, account } };
};

export default login;
