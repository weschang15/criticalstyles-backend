import { withCatch, extractErrors } from "../../../utils";

const login = async (_, { input }, { models: { User }, session }) => {
  const authenticate = params => User.authenticate({ ...params });
  const [error, { user, account }] = await withCatch(authenticate(input));

  if (error) {
    return { ok: false, errors: extractErrors(error) };
  }

  session.user = user;
  session.account = account;
  return { ok: true, auth: { user, account } };
};

export default login;
