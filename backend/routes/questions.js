const router = require('express').Router();
const Question = require('../models/Question');
let questions;

router.get('/today-question', async (req, res) => {
    questions = await Question.find();
    let todayQuestion;
    var i;
    for(i = 0; i < questions.length; i++) {
        if(i === questions.length-1) {
            todayQuestion = new Question(questions[i]);
            todayQuestion.visited = true;
            await todayQuestion.save();
            break;
        }
        if(questions[i].visited) {
            continue;
        } else {
            todayQuestion = new Question(questions[i]);
            todayQuestion.visited = true;
            const savedQuestion = await todayQuestion.save();
            break;
        }
    }
    return res.status(200).json(todayQuestion);
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
        reasoning: req.body.reasoning,
        visited: req.body.visited
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
    questions = await Question.find();
    return res.status(200).json(questions);
});

router.get('/:id', async (req,res) => {
    try {
        const _id = req.params.id;

        const question = await Question.findOne({_id});
        if(!question) {
            return res.status(404).json({});
        } else {
            return res.status(200).json(question);
        }
    } catch (error) {
        return res.status(500).json({"error": error});
    }
});

router.put('/:id', async (req,res) => {
    try {
        const _id = req.params.id;
        let question = await Question.findOne({_id});

        question.question = req.body.question;
        question.answers.choice_one = req.body.answers.choice_one;
        question.answers.choice_two = req.body.answers.choice_two;
        question.answers.choice_three = req.body.answers.choice_three;
        question.answers.choice_four = req.body.answers.choice_four;
        question.reasoning = req.body.reasoning;
        question.correct_answer = req.body.correct_answer;
        question.visited = req.body.visited;

        await question.save();
        return res.status(200).send(question);
        
    } catch(error) {
        return res.status(500).json({"error": error})
    }
    
});
module.exports = router;