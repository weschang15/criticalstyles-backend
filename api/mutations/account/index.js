import addUser from "./addUser";
import createAccount from "./createAccount";

const resolver = {
  Mutation: {
    addUser,
    createAccount
  }
};

export default resolver;
