import createAccount from "./createAccount";
import switchAccount from "./switchAccount";

const middleware = {
  Mutation: {
    createAccount,
    switchAccount
  }
};

export default middleware;
