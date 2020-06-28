import { makeExecutableSchema } from "apollo-server-express";
import { applyMiddleware } from "graphql-middleware";
import merge from "lodash/merge";
// import resolver validation middlewares
import resolverMiddleware from "./middlewares/resolverMiddleware";
import AccountMutations from "./mutations/account";
// import mutation resolvers
import AuthMutations from "./mutations/auth";
import PageMutations from "./mutations/page";
import SiteMutations from "./mutations/site";
import StylesheetMutations from "./mutations/stylesheet";
import TokenMutations from "./mutations/token";
import UserMutations from "./mutations/user";
// import query resolvers
import AccountQueries from "./queries/account";
import AuthQueries from "./queries/auth";
import PageQueries from "./queries/page";
import SiteQueries from "./queries/site";
import TokenQueries from "./queries/token";
import UserQueries from "./queries/user";
// import subscription resolvers
import NotificationSubscriptions from "./subscriptions/notification";
import PageSubscriptions from "./subscriptions/page";
import SiteSubscriptions from "./subscriptions/site";
import UserSubscriptions from "./subscriptions/user";
// import group export of typeDefs
import typeDefs from "./types";

// merged resolvers
const resolvers = merge(
  {},
  AccountMutations,
  AccountQueries,
  AuthMutations,
  AuthQueries,
  NotificationSubscriptions,
  PageQueries,
  PageMutations,
  PageSubscriptions,
  SiteMutations,
  SiteQueries,
  SiteSubscriptions,
  StylesheetMutations,
  TokenQueries,
  TokenMutations,
  UserMutations,
  UserQueries,
  UserSubscriptions
);

const schema = makeExecutableSchema({ typeDefs, resolvers });
const schemaWithMiddleware = applyMiddleware(schema, resolverMiddleware);

export default schemaWithMiddleware;
