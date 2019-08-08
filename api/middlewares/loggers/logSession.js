const logSession = (req, res, next) => {
  console.log(`[logSession.js]: ${JSON.stringify(req.session, null, 2)}`);
  next();
};

export default logSession;
