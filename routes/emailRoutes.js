const express = require('express');
const { sendEmail } = require('../services/emailService');

const router = express.Router();

router.post('/send', sendEmail);

module.exports = router;