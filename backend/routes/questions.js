const router = require('express').Router();
const Question = require('../models/User');
const mongoose = require('mongoose');

router.get('/today-question', (req, res) => {

    const question = new Question({
        question: 'What is 1 + 1?',
        answers: {
            choice_one: '4',
            choice_two: '10', 
            choice_three: '2', 
            choice_four: '3'
        },
        correct_answer: 3,
        reasoning: 'Because of basic math!'
    });
    res.json(question);
})

module.exports = router;