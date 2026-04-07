const { addEmailJob } = require('../producer/emailProducer');

const sendEmail = async (req, res) => {
  const job = await addEmailJob(req.body);
  res.json({ message: 'Email queued', jobId: job.id });
};

module.exports = { sendEmail };