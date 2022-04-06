const User = require('../models/User');

exports.getUsers = (req, res) => {
    return res.status(200).json({ msg: "get all users endpoint" });
};