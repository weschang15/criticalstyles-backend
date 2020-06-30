import { extractErrors, withCatch } from "../../../utils";
import { createApiKeys } from "../../services";

const mutation = async (_, args, { models: { Token }, user, account }) => {
  async function createToken() {
    const keys = createApiKeys();
    const newToken = new Token({ ...keys, createdBy: user, account });
    await newToken.save();

    return { secret: keys.secret };
  }

  const [error, token] = await withCatch(createToken());

  if (error) {
    return { ok: false, errors: extractErrors(error) };
  }

  return { ok: true, token };
};

export default mutation;
