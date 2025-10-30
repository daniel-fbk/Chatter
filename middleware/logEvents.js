// imports
const { format } = require("date-fns");
const { v4: uuid } = require("uuid");
const fs = require("fs");
const path = require("path");
const fsPromises = require("fs").promises;

const logEvents = async (message, logName) => {
  const dateTime = `${format(new Date(), "ddMMyyyy\tHH:mm:ss")}`;
  const theLog = `${dateTime}\ ${uuid()}\t ${message}\n`;
  console.log(theLog);

  try {
    if (!fs.existsSync(path.join(__dirname, "..", "logs"))) {
      await fsPromises.mkdir(path.join(__dirname, "..", "logs"));
    }
    await fsPromises.appendFile(path.join(__dirname, "..", "logs", logName), theLog);
  } catch (err) {
    console.log(err);
  }
};

const logger = (req, res, next) => {
  logEvents(`${req.method}\t${req.header.origin}\t${req.url}`, "reqLog.txt");
  if (process.env.NODE_ENV === "development") {
    console.log(`${req.method} ${req.path}`);
  }
  next();
};

module.exports = { logEvents, logger };
