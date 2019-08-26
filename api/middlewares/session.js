import connectRedis from "connect-redis";
import session from "express-session";
import { isProd, sessionKey, sessionSecret } from "../../config";
import createRedis from "../../shared/redis/createRedis";

const RedisStore = connectRedis(session);
const client = createRedis();
const store = new RedisStore({ client });

const middleware = session({
  secret: sessionSecret,
  key: sessionKey,
  resave: false,
  saveUninitialized: false,
  store,
  cookie: {
    httpOnly: isProd(),
    maxAge: 1000 * 60 * 60 * 24 * 7,
    secure: isProd(),
    domain: isProd() ? `.criticalstyles.com` : `.criticalstyles.com`
  }
});

export default middleware;
