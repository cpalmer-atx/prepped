const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


exports.userByToken = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}


exports.authenticateUser = async (req, res) => {
    /* 
        TODO: Add input validation  
    */

    const { email, password } = req.body;

    try {
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ msg: 'No user found' });
        }

        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }

        const callback = (err, token) => {
            if (err) { throw err; }
            res.json({ token });
        }

        jwt.sign(
            { user: { id: user.id } },
            process.env.JWT_SECRET,
            { expiresIn: '5 days' },
            callback
        );

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};