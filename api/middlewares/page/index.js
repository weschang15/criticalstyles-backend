import createPage from "./createPage";
import pages from "./pages";

const middleware = {
  Query: {
    pages
  },
  Mutation: {
    createPage
  }
};

export default middleware;
