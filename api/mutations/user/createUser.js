import { extractErrors, withCatch } from "../../../utils";
import pick from "lodash/pick";

const createUser = async (_, { input }, { models: { User }, session }) => {
  async function newUser(params) {
    const user = new User({ ...params });
    const result = await user.save();
    return result.toJSON();
  }

  const [error, user] = await withCatch(newUser(input));
  if (error) {
    return { ok: false, errors: extractErrors(error) };
  }

  session.user = user;
  return { ok: true, user };
};

export default createUser;
