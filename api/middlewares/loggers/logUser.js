const logUser = (req, res, next) => {
  console.log(`[logUser.js]: ${req.user}`);
  next();
};

export default logUser;
