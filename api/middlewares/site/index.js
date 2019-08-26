import createSite from "./createSite";
import getSite from "./getSite";

const middleware = {
  Query: {
    getSite
  },
  Mutation: {
    createSite
  }
};

export default middleware;
