import pages from "./pages";
import getSite from "./getSite";

const resolvers = {
  Site: {
    pages
  },
  Query: {
    getSite
  }
};

export default resolvers;
