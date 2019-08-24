import { withFilter } from "apollo-server-express";
import createPubsub from "../../../shared/redis/createPubSub";
import { SITE_ADDED } from "../../../shared/redis/events";

const pubsub = createPubsub();

const subscriptions = {
  Subscription: {
    siteAdded: {
      subscribe: withFilter(
        () => pubsub.asyncIterator(SITE_ADDED),
        (payload, args) => payload.accountId === args.accountId
      )
    }
  }
};

export default subscriptions;
