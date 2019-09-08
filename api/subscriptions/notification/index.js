import { withFilter } from "apollo-server-express";
import createPubsub from "../../../shared/redis/createPubSub";
import { NOTIFICATION_ADDED } from "../../../shared/redis/events";

const pubsub = createPubsub();

const subscriptions = {
  Subscription: {
    notificationAdded: {
      subscribe: withFilter(
        () => pubsub.asyncIterator(NOTIFICATION_ADDED),
        (payload, args) => payload.accountId === args.input.accountId
      )
    }
  }
};

export default subscriptions;
