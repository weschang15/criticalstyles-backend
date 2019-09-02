import createSite from "./createSite";
import deleteSite from "./deleteSite";
import sites from "./sites";

const middleware = {
  Query: {
    sites
  },
  Mutation: {
    createSite,
    deleteSite
  }
};

export default middleware;
