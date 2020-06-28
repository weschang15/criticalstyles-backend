export default (req, res, next) => {
  const apiKey = req.header("X-CRITICALSTYLES-API-KEY");
  if (!apiKey) {
    return res.status(403).json({
      ok: false,
      data: {
        message: "Missing API key",
      },
    });
  }

  req.apiKey = apiKey;
  next();
};
