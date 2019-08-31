import accounts from "./accounts";
import currentUser from "./currentUser";

const resolvers = {
  User: {
    accounts
  },
  Query: {
    currentUser
  }
};

export default resolvers;
