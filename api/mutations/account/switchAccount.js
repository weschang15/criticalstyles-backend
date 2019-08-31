import { withCatch } from "../../../utils";
const mutation = async (
  _,
  { input },
  { models: { Account }, session },
  info
) => {
  const [error, account] = await withCatch(Account.findById(input.accountId));
  if (error) {
    return { ok: false, errors: extractErrors(error) };
  }

  session.account = account.toJSON();
  return { ok: true };
};

export default mutation;
