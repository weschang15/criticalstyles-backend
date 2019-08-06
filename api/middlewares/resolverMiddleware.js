import merge from "lodash/merge";
import stylesheetMiddelware from "./stylesheet";

const resolverMiddleware = merge({}, stylesheetMiddelware);

export default resolverMiddleware;
