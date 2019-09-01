import { ApolloServer } from "apollo-server-express";
import getCurrentSession from "./middlewares/auth/getCurrentSession";
import * as models from "./models";
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
const context = ({ req, res, connection }) => {
  if (connection) {
    return connection.context;
  } else {
    return {
      ip: req.ip,
      models,
      req,
      res,
      session: req.session,
      user: req.user,
      account: req.account
    };
  }
};

const onConnect = (_, ws) => getCurrentSession(ws.upgradeReq);

const apollo = new ApolloServer({
  schema,
  context,
  subscriptions: { onConnect }
});

export default apollo;
