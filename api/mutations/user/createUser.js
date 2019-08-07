import { extractErrors, withCatch } from "../../../utils";
import pick from "lodash/pick";

const createUser = async (_, { input }, { models: { User }, req }, info) => {
  async function newUser(params) {
    const user = new User({ ...params });
    const result = await user.save();
    return pick(result, ["firstName", "lastName", "email", "_id"]);
  }

  const [error, user] = await withCatch(newUser(input));
  if (error) {
    return { ok: false, errors: extractErrors(error) };
  }

  req.session.user = user;
  return { ok: true, user };
};

export default createUser;
