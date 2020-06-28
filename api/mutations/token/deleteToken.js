import { extractErrors, withCatch } from "../../../utils";

export default async (_, { input }, { models: { Token }, user, account }) => {
  const { _id } = input;
  const deleteToken = async () => {
    if (user._id !== account.owner._id) {
      throw new Error(
        "Permission denied. Must be account owner to delete API keys."
      );
    }
    const count = await Token.deleteOne({ _id });
    return count;
  };

  const [error, count] = await withCatch(deleteToken());
  const response = error
    ? { ok: false, errors: extractErrors(error) }
    : { ok: Boolean(count) };

  return response;
};
