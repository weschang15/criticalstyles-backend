import merge from "lodash/merge";
import siteMiddleware from "./site";
import stylesheetMiddelware from "./stylesheet";

const resolverMiddleware = merge({}, siteMiddleware, stylesheetMiddelware);

export default resolverMiddleware;
