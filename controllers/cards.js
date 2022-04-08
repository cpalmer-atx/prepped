const User = require('../models/User');

exports.addCard = async (req, res) => {
    const { question, answer } = req.body;

    try {
        const user = await User.findById(req.user.id).select('-password');
        if (!user) {
            return res.status(400).json({ msg: 'No user found' });
        }

        const payload = {
            question: question,
            answer: answer
        };

        user.cards.push(payload);
        user.save();

        res.status(200).send({
            msg: `Added card to ${user.name}`,
            data: payload
        });
        
    } catch (err) {
        console.error(err.message);
        res.status(500).send(err.message);
    }
}

// exports.deleteCard = async (req, res) => {
//     return {};
// }