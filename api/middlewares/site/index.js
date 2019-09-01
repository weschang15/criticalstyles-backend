import createSite from "./createSite";
import deleteSite from "./deleteSite";
import getSite from "./getSite";

const middleware = {
  Query: {
    getSite
  },
  Mutation: {
    createSite,
    deleteSite
  }
};

export default middleware;
