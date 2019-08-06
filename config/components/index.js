import common from "./common";
import cors from "./cors";
import mongo from "./mongo";
import redis from "./redis";

const components = Object.assign({}, common, cors, mongo, redis);

export default components;
