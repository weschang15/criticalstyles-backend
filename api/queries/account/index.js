import getAccount from "./getAccount";
import sites from "./sites";
import users from "./users";

const resolvers = {
  Account: {
    sites,
    users
  },
  Query: {
    getAccount
  }
};

export default resolvers;
