const { db } = require('../models/User');
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


exports.deleteCard = async (req, res) => {
    const { id } = req.body;
    
    try {
        // Find user in database
        const user = await User.findById(req.user.id).select('-password');
        if (!user) {
            return res.status(400).json({ msg: 'No user found' });
        }

        // Filter out all cards to keep into a newCardList
        const newCardList = user.cards.filter( card => { return card.id !== id });
        if (newCardList.length === user.cards.length) {
            return res.status(400).json({ msg: 'No card found' });
        }

        // Replace user's cards with the newCardList and save the user collection
        user.cards = newCardList;
        user.save();

        // Return the user's updated cards list
        return res.status(200).send(user.cards);
    } catch (err) {
        console.error(err.message);
        res.status(500).send(err.message);
    }
}