const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth')
const { addCard } = require('../controllers/cards');

router
    .route('/')
    .post(auth, addCard);

module.exports = router;