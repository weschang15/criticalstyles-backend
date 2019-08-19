import { withCatch, extractErrors } from "../../../utils";

const getAccount = async (
  _,
  { input: { id } },
  { models: { Account }, user }
) => {
  const [error, account] = await withCatch(
    Account.findOne(
      {
        $and: [{ _id: id }, { $or: [{ owner: user._id }, { users: user._id }] }]
      },
      "-sites -users",
      { lean: true }
    )
  );

  return error
    ? { ok: false, errors: extractErrors(error) }
    : { ok: true, account };
};

export default getAccount;
