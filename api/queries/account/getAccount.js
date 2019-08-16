import { withCatch, extractErrors } from "../../../utils";

const getAccount = async (_, { input: { id } }, { user }) => {
  const [error, account] = await withCatch(
    Account.findOne({
      $and: [
        { _id: id },
        { $or: [{ owner: user._id }, { $in: { users: user._id } }] }
      ]
    })
  );

  return error
    ? { ok: false, errors: extractErrors(error) }
    : { ok: true, account };
};

export default getAccount;
