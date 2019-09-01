import getAccount from "./getAccount";
import sites from "./sites";
import summary from "./summary";
import users from "./users";

const resolvers = {
  Account: {
    sites,
    users,
    summary
  },
  Query: {
    getAccount
  }
};

export default resolvers;
