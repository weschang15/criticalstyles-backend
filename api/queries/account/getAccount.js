import { extractErrors, withCatch } from "../../../utils";

const getAccount = async (_, args, { models: { Account }, session, user }) => {
  const [error, account] = await withCatch(
    Account.findOne(
      {
        $and: [
          { _id: session.account._id },
          { $or: [{ owner: user._id }, { users: user._id }] }
        ]
      },
      "-users",
      { lean: true }
    )
  );

  return error
    ? { ok: false, errors: extractErrors(error) }
    : { ok: true, account };
};

export default getAccount;
