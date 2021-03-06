const winston = require('winston');

module.exports = new winston.Logger({
  transports: [
    new winston.transports.Console({
      prettyPrint: true,
      colorize: true,
      silent: false,
      timestamp: false,
    }),
  ],
});
