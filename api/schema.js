import { makeExecutableSchema } from "apollo-server-express";
import { applyMiddleware } from "graphql-middleware";
import merge from "lodash/merge";

// import query resolvers

// import mutation resolvers

// import subscription resolvers

// import group export of typeDefs
import typeDefs from "./types";

// import resolver validation middlewares

const resolvers = merge({});

const schema = makeExecutableSchema({ typeDefs, resolvers });
const schemaWithMiddleware = applyMiddleware(schema);

export default schemaWithMiddleware;
