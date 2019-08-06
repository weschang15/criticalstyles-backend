import { makeExecutableSchema } from "apollo-server-express";
import { applyMiddleware } from "graphql-middleware";
import merge from "lodash/merge";

// import mutation resolvers
import StylesheetMutations from "./mutations/stylesheet";

// import group export of typeDefs
import typeDefs from "./types";

// import resolver validation middlewares
import resolverMiddleware from "./middlewares/resolverMiddleware";

// merged resolvers
const resolvers = merge({}, StylesheetMutations);

const schema = makeExecutableSchema({ typeDefs, resolvers });
const schemaWithMiddleware = applyMiddleware(schema, resolverMiddleware);

export default schemaWithMiddleware;
