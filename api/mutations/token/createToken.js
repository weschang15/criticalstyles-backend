import { extractErrors, withCatch } from "../../../utils";
import { createApiKeys } from "../../services";

const mutation = async (_, args, { models: { Token }, user, account }) => {
  async function createToken() {
    if (user._id !== account.owner._id) {
      throw new Error(
        "Permission denied. Must be account owner to generate API keys."
      );
    }

    const keys = createApiKeys();
    const newToken = new Token({ ...keys, createdBy: user, account });
    await newToken.save();

    return keys;
  }

  const [error, keys] = await withCatch(createToken());

  if (error) {
    return { ok: false, errors: extractErrors(error) };
  }

  return { ok: true, token: { secret: keys.secret } };
};

export default mutation;
