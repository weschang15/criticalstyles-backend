import crypto from "crypto";
import Cryptr from "cryptr";
import { tokenSecret } from "../../config";

const cryptr = new Cryptr(tokenSecret);

function createApiKeys() {
  // we should concatenate user id here so that when we decrypt for incoming
  // API calls, we can determine what user is making the request
  const token = crypto.randomBytes(32).toString("hex");
  // encrypt the UUID - this is provided to the end user and is attached to every API call
  // via header X-CRITICALSTYLES-API-KEY
  const secret = cryptr.encrypt(token);
  return {
    token,
    secret,
  };
}

export default createApiKeys;
