import { withCatch, extractErrors } from "../../../utils";

const login = async (_, { input }, { models: { User }, session }) => {
  const authenticate = params => User.authenticate({ ...params });
  const [error, user] = await withCatch(authenticate(input));

  if (error) {
    return { ok: false, errors: extractErrors(error) };
  }

  session.user = user;
  return { ok: true, user };
};

export default login;
