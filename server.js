const connectMongoDB = require('./database/db');
const { default: mongoose } = require('mongoose');
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

connectMongoDB();

const users = require('./routes/users');
const cards = require('./routes/cards');
const auth = require('./routes/auth');

app.use(cors());
app.use(express.json());
app.use('/api/users', users);
app.use('/api/cards', cards);
app.use('/api/auth', auth);

const PORT = process.env.PORT || 5500;

const server = app.listen(PORT, () => 
    console.log(`Server listening on port ${PORT}...`));

const exit = () => {
        server.close(() => {
        mongoose.connection.close(false, () => {
            console.log('\nServer and database connections closed.');
        });
    });

};

process.on('SIGINT', exit);
