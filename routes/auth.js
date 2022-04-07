const { userByToken, authenticateUser } = require('../controllers/auth');
const auth = require('../middleware/auth')
const express = require('express');
const router = express.Router();

router
    .route('/')
    .get(auth, userByToken)
    .post(authenticateUser);

module.exports = router;