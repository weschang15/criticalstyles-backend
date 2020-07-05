import createPage from "./createPage";
import pages from "./pages";
import refreshPage from "./refreshPage";

const middleware = {
  Query: {
    pages,
  },
  Mutation: {
    createPage,
    refreshPage,
  },
};

export default middleware;
