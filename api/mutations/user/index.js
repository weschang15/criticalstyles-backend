import createUser from "./createUser";
import login from "./login";
import logout from "./logout";

const resolver = {
  Mutation: {
    createUser,
    login,
    logout
  }
};

export default resolver;
