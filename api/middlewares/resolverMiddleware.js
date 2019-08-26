import merge from "lodash/merge";
import accountMiddleware from "./account";
import pageMiddelware from "./page";
import siteMiddleware from "./site";
import stylesheetMiddelware from "./stylesheet";

const resolverMiddleware = merge(
  {},
  accountMiddleware,
  pageMiddelware,
  siteMiddleware,
  stylesheetMiddelware
);

export default resolverMiddleware;
