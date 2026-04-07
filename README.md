# Redis Queue Project

A simple Node.js project that uses BullMQ and Redis to queue email jobs.

## Project Structure

- `app.js` - Express server entrypoint
- `worker/emailWorker.js` - BullMQ worker that processes queued email jobs
- `routes/emailRoutes.js` - HTTP routes for adding email jobs
- `services/emailService.js` - Service layer for request handling
- `producer/emailProducer.js` - Adds jobs to the email queue
- `queue/emailQueue.js` - BullMQ queue configuration
- `config/redis.js` - Redis connection settings
- `Dockerfile_redis` - Redis Docker configuration (optional)

## Requirements

- Node.js
- Redis server running locally on `127.0.0.1:6379`

## Install

```bash
npm install
```

## Run

Start the Express API server:

```bash
node app.js
```

Start the email worker in a separate terminal:

```bash
node worker/emailWorker.js
```

## API

### Queue an email

POST `/email/send`

Request body example:

```json
{
  "to": "recipient@example.com",
  "subject": "Hello",
  "body": "This is a queued email message."
}
```

Response:

```json
{
  "message": "Email queued",
  "jobId": "<job id>"
}
```

## Notes

- The worker simulates email sending by waiting for 20 seconds.
- Redis connection info is defined in `config/redis.js`.
- The queue uses `email-queue` and the job name `send-email`.
