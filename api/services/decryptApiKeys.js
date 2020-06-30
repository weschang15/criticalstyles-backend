import Cryptr from "cryptr";
import { tokenSecret } from "../../config";

const cryptr = new Cryptr(tokenSecret);

function decryptApiKeys(value) {
  // encrypt the UUID - this is provided to the end user and is attached to every API call
  // via header X-CRITICALSTYLES-API-KEY
  const token = cryptr.decrypt(value);
  return {
    token,
  };
}

export default decryptApiKeys;
