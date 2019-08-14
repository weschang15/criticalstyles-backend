import { extractErrors, withCatch } from "../../../utils";

const createAccount = async (
  _,
  { input },
  { models: { Account, User }, session }
) => {
  async function createNewUser(newUserInput) {
    const newUser = new User({ ...newUserInput });
    const user = await newUser.save();
    return user;
  }

  async function createNewAccount(name, owner) {
    const newAccount = new Account({ name, owner });
    const account = await newAccount.save();
    await owner.updateOne({ $push: { accounts: account } });

    return account.populate("owner", "-password");
  }

  const [userError, user] = await withCatch(createNewUser(input.user));
  if (userError) {
    return { ok: false, errors: extractErrors(userError) };
  }

  const [accError, account] = await withCatch(
    createNewAccount(input.name, user)
  );

  if (accError) {
    return { ok: false, errors: extractErrors(accError) };
  }

  session.user = user.toJSON();
  return { ok: true, account };
};

export default createAccount;
