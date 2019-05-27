import Redis from "ioredis";
import { getConfig } from "../../utils";

function createRedis(opts = {}) {
  const config = getConfig("redis");
  return new Redis({ ...config, ...opts });
}

export default createRedis;
