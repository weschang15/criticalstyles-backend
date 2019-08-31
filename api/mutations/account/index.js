import addUser from "./addUser";
import createAccount from "./createAccount";
import switchAccount from "./switchAccount";

const resolver = {
  Mutation: {
    addUser,
    createAccount,
    switchAccount
  }
};

export default resolver;
