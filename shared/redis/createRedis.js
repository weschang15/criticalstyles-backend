import Redis from "ioredis";
import { getConfig } from "../../utils";

function createRedis(opts = {}) {
  const config = getConfig("redis");
  if ("url" in config) {
    const { url, ...rest } = config;
    return new Redis(url, { ...rest });
  }

  return new Redis({ ...config, ...opts });
}

export default createRedis;
