import Arena from "bull-arena";
import { getConfig } from "../../utils";
import types from "../../worker/queues/types";

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
