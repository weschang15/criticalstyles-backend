import { ApolloServer } from "apollo-server-express";
import schema from "./schema";

/**
 * Context creation function for both websocket connections or HTTP requests
 *
 * @param {Object} args arguments that are provided from our apollo-server-express integration
 * @param {Object} args.req HTTP request
 * @param {Object} args.res HTTP response
 * @param {Object} args.connection Websocket connection query
 * @return {Object} our resolver context for either Queries & Mutations or Subscriptions
 */
const context = ({ req, res, connection }) => ({ req, res, ip: req.ip });

const apollo = new ApolloServer({
  schema,
  context
});

export default apollo;