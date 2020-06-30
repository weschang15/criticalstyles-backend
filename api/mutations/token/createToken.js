import { extractErrors, withCatch } from "../../../utils";
import { createApiKeys } from "../../services";

const mutation = async (_, { input }, { models: { Token }, user, account }) => {
  const { host } = input;
  async function createToken() {
    if (user._id.toString() !== account.owner.toString()) {
      throw new Error(
        "Permission denied. Must be account owner to generate API keys."
      );
    }

    const keys = createApiKeys();
    const newToken = new Token({ ...keys, host, createdBy: user, account });
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
