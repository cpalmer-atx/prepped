const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth')
const { addCard, deleteCard } = require('../controllers/cards');

router
    .route('/')
    .post(auth, addCard)
    .delete(auth, deleteCard);

module.exports = router;