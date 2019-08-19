import { extractErrors, withCatch } from "../../../utils";

const createAccount = async (
  _,
  { input },
  { models: { Account, User }, session }
) => {
  async function register({ name, user: userInput }) {
    const newUser = new User({ ...userInput });
    const newAcc = new Account({ name, owner: newUser });

    const [user, account] = await Promise.all([newUser.save(), newAcc.save()]);
    await user.updateOne({ $push: { accounts: account } });

    return account;
  }

  const [error, account] = await withCatch(register(input));

  if (error) {
    return { ok: false, errors: extractErrors(error) };
  }

  const owner = account.owner.toJSON();
  const acc = account.toJSON();

  session.user = owner;
  session.account = acc;
  return { ok: true, account: acc, owner };
};

export default createAccount;
