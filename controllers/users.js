const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { config } = require('dotenv');

exports.registerUser = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        /* Uncomment when database is connected */
        // let user = await User.findOne({ email });
        // if (user) {
        //     return res.status(400).json({ msg: 'user already exists' });
        // }

        user = new User({
            name,
            email,
            password
        });

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);
        /* Uncomment when database is connected */
        // await user.save();
        console.log(user);

        const payload = { user: { id: user.id } };
        jwt.sign( 
            payload, 
            process.env.JWT_SECRET,
            { expiresIn: '5 days' },
            (err, token) => { 
                if (err) throw err;
                res.json({ token });
            }
        );
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};