import createSite from "./createSite";
import deleteSite from "./deleteSite";
import getSite from "./getSite";
import sites from "./sites";

const middleware = {
  Query: {
    getSite,
    sites
  },
  Mutation: {
    createSite,
    deleteSite
  }
};

export default middleware;
