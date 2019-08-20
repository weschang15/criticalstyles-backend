import { withFilter } from "apollo-server-express";
import createPubsub from "../../../shared/redis/createPubSub";
import { SITE_ADDED } from "../../../shared/redis/events";

const pubsub = createPubsub();

const subscriptions = {
  Subscription: {
    siteAdded: {
      subscribe: withFilter(
        () => pubsub.asyncIterator(SITE_ADDED),
        (rootValue, args) => rootValue.account._id === args.accountId
      )
    }
  }
};

export default subscriptions;
