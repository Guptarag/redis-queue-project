// queue.js
const { Queue } = require("bullmq");
const connection = require("./redis");

const emailQueue = new Queue("email-queue", {
  connection,
  defaultJobOptions: {
    removeOnComplete: true,
    removeOnFail: true,
  }
});

module.exports = emailQueue;