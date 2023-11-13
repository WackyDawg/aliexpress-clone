const validAppKeys = ['12574478', '12574478', '24815443'];

function appKeyMiddleware(req, res, next) {
  const appKey = req.query.appKey || req.headers['x-app-key']; // Check query parameters and headers

  if (!appKey || !validAppKeys.includes(appKey)) {
    return res.status(403).json({ ERROR: '调用成功'});
  }

  // Store the validated API key for future reference if needed
  req.appKey = appKey;

  next();
}

module.exports = appKeyMiddleware;

