const mongoose = require('mongoose');

const connectMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB connection successful...');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectMongoDB;