const router = require('express').Router();
const Question = require('../models/Question');

router.get('/today-question', async (req, res) => {
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

    return res.status(200).json(question);
});

router.get('/today-question-test', async (req, res) => {

    const questions = await Question.find();

    return res.status(200).json(questions);
});

module.exports = router;