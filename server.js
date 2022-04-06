require('dotenv').config();
const express = require('express');

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5500;

app.listen(PORT, () => console.log(`Server listening on port ${PORT}...`));