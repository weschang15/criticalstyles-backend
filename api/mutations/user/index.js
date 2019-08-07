import createUser from "./createUser";
import logout from "./logout";

const resolver = {
  Mutation: {
    createUser,
    logout
  }
};

export default resolver;
