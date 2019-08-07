import { makeExecutableSchema } from "apollo-server-express";
import { applyMiddleware } from "graphql-middleware";
import merge from "lodash/merge";

// import query resolvers
import UserQueries from "./queries/user";

// import mutation resolvers
import SiteMutations from "./mutations/site";
import StylesheetMutations from "./mutations/stylesheet";

// import group export of typeDefs
import typeDefs from "./types";

// import resolver validation middlewares
import resolverMiddleware from "./middlewares/resolverMiddleware";

// merged resolvers
const resolvers = merge({}, UserQueries, SiteMutations, StylesheetMutations);

const schema = makeExecutableSchema({ typeDefs, resolvers });
const schemaWithMiddleware = applyMiddleware(schema, resolverMiddleware);

export default schemaWithMiddleware;
