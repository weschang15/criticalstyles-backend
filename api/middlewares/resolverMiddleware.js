import merge from "lodash/merge";
import criticalStyleMiddelware from "./criticalStyle";

const resolverMiddleware = merge({}, criticalStyleMiddelware);

export default resolverMiddleware;
