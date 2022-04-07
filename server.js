const connectMongoDB = require('./database/db');
const express = require('express');
require('dotenv').config();

const app = express();

connectMongoDB();

const users = require('./routes/users');

app.use(express.json());

app.use('/api/users', users);

const PORT = process.env.PORT || 5500;

app.listen(PORT, () => console.log(`Server listening on port ${PORT}...`));