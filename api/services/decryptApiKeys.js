import { tokenSecret } from "../../config";
import Encrypter from "./Encrypter";
const encrypter = new Encrypter({ secret: tokenSecret });

function decryptApiKeys(value) {
  // encrypt the UUID - this is provided to the end user and is attached to every API call
  // via header X-CRITICALSTYLES-API-KEY
  const token = encrypter.decrypt({ value });
  return {
    token,
  };
}

export default decryptApiKeys;
