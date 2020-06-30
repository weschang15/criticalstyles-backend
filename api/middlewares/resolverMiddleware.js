import merge from "lodash/merge";
import accountMiddleware from "./account";
import pageMiddelware from "./page";
import siteMiddleware from "./site";
import stylesheetMiddelware from "./stylesheet";
import tokenMiddelware from "./token";

const resolverMiddleware = merge(
  {},
  accountMiddleware,
  pageMiddelware,
  siteMiddleware,
  stylesheetMiddelware,
  tokenMiddelware
);

export default resolverMiddleware;
