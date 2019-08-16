const logAccount = (req, res, next) => {
  console.log(`[logAccount.js]: ${req.account}`);
  next();
};

export default logAccount;
