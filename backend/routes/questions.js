const router = require('express').Router();
const Question = require('../models/User');
const mongoose = require('mongoose');

router.get('/today-question', async (req, res) => {

    // const question = {
    //     question: 'What is 1 + 1?',
    //     answers: {
    //         choice_one: '4',
    //         choice_two: '10', 
    //         choice_three: '2', 
    //         choice_four: '3'
    //     },
    //     correct_answer: 3,
    //     reasoning: 'Because of basic math!'
    // };
    // res.json(question);
    try { 
        const questions = await Question.find()
        return res.status(200).json(questions)
    } catch (error) {
        return res.status(500).json({"error":error})
    }
});

router.post('/today-question', (req, res) => {
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

    question.save( (error) => {
        if (error) {
            res.status(500).send(error);
        } else {
            res.status(200).send("Added")
        }
    });

});

module.exports = router;