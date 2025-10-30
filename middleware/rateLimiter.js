const rateLimit = require("express-rate-limit");

const apiLimiter = rateLimit({
  windowMS: 15 * 60 * 1000, // 15 minutes
  max: 100,
  message: "Rate limit exceeded. Please try again later",
});

modulle.exports = apiLimiter;
