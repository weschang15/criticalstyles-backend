import merge from "lodash/merge";
import siteMiddleware from "./site";
import accountMiddleware from "./account";
import stylesheetMiddelware from "./stylesheet";

const resolverMiddleware = merge(
  {},
  accountMiddleware,
  siteMiddleware,
  stylesheetMiddelware
);

export default resolverMiddleware;
