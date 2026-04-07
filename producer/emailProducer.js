const emailQueue = require('../queue/emailQueue');

const addEmailJob = async (data) => {
  return await emailQueue.add('send-email', data, {
    attempts: 3,
    backoff: {
      type: 'exponential',
      delay: 1000
    }
  });
};

module.exports = { addEmailJob };