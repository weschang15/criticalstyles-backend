import { withFilter } from "apollo-server-express";
import createPubsub from "../../../shared/redis/createPubSub";
import { PAGE_ADDED } from "../../../shared/redis/events";

const pubsub = createPubsub();

const subscriptions = {
  Subscription: {
    pageAdded: {
      subscribe: withFilter(
        () => pubsub.asyncIterator(PAGE_ADDED),
        (payload, args) =>
          payload.accountId === args.input.accountId &&
          payload.siteId === args.input.siteId
      )
    }
  }
};

export default subscriptions;
