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

router.post('/create-question', async(req, res) => {
    const question = new Question ({
        question: req.body.question,
        answers: {
            choice_one: req.body.answers.choice_one,
            choice_two: req.body.answers.choice_two,
            choice_three: req.body.answers.choice_three,
            choice_four: req.body.answers.choice_four
        },
        correct_answer: req.body.correct_answer,
        reasoning: req.body.reasoning
        });
        try {
            const savedQuestion = await question.save();
            res.send({
                message: "Success! Question Saved"
            })
        } catch(err) {
            res.status(400).send(err);
        }
});
router.get('/', async (req, res) => {

    const questions = await Question.find();

    return res.status(200).json(questions);
});

module.exports = router;