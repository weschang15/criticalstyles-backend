import { RedisPubSub } from "graphql-redis-subscriptions";
import createRedis from "./createRedis";

const publisher = createRedis();
const subscriber = createRedis();

function createPubsub() {
  return new RedisPubSub({
    publisher,
    subscriber
  });
}

export default createPubsub;
