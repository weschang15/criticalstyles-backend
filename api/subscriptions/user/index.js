import { withFilter } from "apollo-server-express";
import createPubsub from "../../../shared/redis/createPubSub";
import { USER_ADDED } from "../../../shared/redis/events";

const pubsub = createPubsub();

const subscriptions = {
  Subscription: {
    userAdded: {
      subscribe: withFilter(
        () => pubsub.asyncIterator(USER_ADDED),
        (payload, args) => payload.accountId === args.accountId
      )
    }
  }
};

export default subscriptions;
