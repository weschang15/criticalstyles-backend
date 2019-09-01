import getAccount from "./getAccount";
import summary from "./summary";

const resolvers = {
  Account: {
    summary
  },
  Query: {
    getAccount
  }
};

export default resolvers;
