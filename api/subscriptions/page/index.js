import { withFilter } from "apollo-server-express";
import createPubsub from "../../../shared/redis/createPubSub";
import { PAGE_ADDED, PAGE_UPDATED } from "../../../shared/redis/events";

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
    },
    pageUpdated: {
      subscribe: withFilter(
        () => pubsub.asyncIterator(PAGE_UPDATED),
        (payload, args) => payload.pageId === args.input.pageId
      )
    }
  }
};

export default subscriptions;
