import getSite from "./getSite";
import pages from "./pages";
import sites from "./sites";

const resolvers = {
  Site: {
    pages
  },
  Query: {
    sites,
    getSite
  }
};

export default resolvers;
