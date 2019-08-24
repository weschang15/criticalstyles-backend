import { makeExecutableSchema } from "apollo-server-express";
import { applyMiddleware } from "graphql-middleware";
import merge from "lodash/merge";

// import query resolvers
import AccountQueries from "./queries/account";
import AuthQueries from "./queries/auth";
import SiteQueries from "./queries/site";
import UserQueries from "./queries/user";

// import mutation resolvers
import AuthMutations from "./mutations/auth";
import SiteMutations from "./mutations/site";
import StylesheetMutations from "./mutations/stylesheet";
import UserMutations from "./mutations/user";
import AccountMutations from "./mutations/account";

// import subscription resolvers
import SiteSubscriptions from "./subscriptions/site";

// import group export of typeDefs
import typeDefs from "./types";

// import resolver validation middlewares
import resolverMiddleware from "./middlewares/resolverMiddleware";

// merged resolvers
const resolvers = merge(
  {},
  AccountMutations,
  AccountQueries,
  AuthMutations,
  AuthQueries,
  SiteMutations,
  SiteQueries,
  SiteSubscriptions,
  StylesheetMutations,
  UserMutations,
  UserQueries
);

const schema = makeExecutableSchema({ typeDefs, resolvers });
const schemaWithMiddleware = applyMiddleware(schema, resolverMiddleware);

export default schemaWithMiddleware;
