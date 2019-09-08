import Arena from "bull-arena";
import types from "../../queues/types";
import { getConfig } from "../../utils";

const redis = getConfig("redis");

const arena = Arena({
  queues: types.map(type => ({
    name: type,
    hostId: type,
    redis: {
      ...redis
    }
  }))
});

export default arena;
