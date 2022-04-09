const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth')
const { addCard, editCard, deleteCard } = require('../controllers/cards');

router
    .route('/')
    .post(auth, addCard)
    .put(auth, editCard)
    .delete(auth, deleteCard);

module.exports = router;