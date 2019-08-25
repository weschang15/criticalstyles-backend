import { extractErrors, withCatch } from "../../../utils";

const mutation = async (
  _,
  { input },
  { models: { Account, User }, session }
) => {
  const addUser = async () => {
    const { email } = input;
    const [userToAdd, account] = await Promise.all([
      User.findOne({ email }),
      Account.findById(session.account._id)
    ]);

    if (!userToAdd) {
      throw new Error("User does not exist.");
    }

    // Ideally we would send an email invitation here instead

    account.users.push(userToAdd);
    userToAdd.accounts.push(account);

    const [user] = await Promise.all([userToAdd.save(), account.save()]);

    return user;
  };

  const [err, result] = await withCatch(addUser());

  const response = err
    ? { ok: false, errors: extractErrors(err) }
    : { ok: !!result };

  return response;
};

export default mutation;
