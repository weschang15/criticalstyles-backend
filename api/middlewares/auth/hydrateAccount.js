import { withCatch } from "../../../utils";
import { Account } from "../../models";

async function hydrateAccount(req, _, next) {
  const { session } = req;
  if (!session.account) {
    return next();
  }

  const { account } = session;
  const [, currentAcc] = await withCatch(Account.findById(account._id));
  // set the current User model instance on req object
  req.account = currentAcc;
  return next();
}

export default hydrateAccount;
