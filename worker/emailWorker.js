const { Worker } = require('bullmq');
const connection = require('../config/redis');

const worker = new Worker(
  'email-queue',
  async (job) => {
    console.log('Received job:', job.id);
    console.log('Processing:', job.data);
    console.log('Simulating email sending...');
    await new Promise(res => setTimeout(res, 20000));

    console.log('Email sent to:', job.data.to);
  },
  {
    connection,
    concurrency: 1,
    lockDuration: 30000,
    lockRenewTime: 15000,
  }
);