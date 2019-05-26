import common from "./common";
import cors from "./cors";
import redis from "./redis";

const components = Object.assign({}, common, cors, redis);

export default components;
