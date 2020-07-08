const router = require('express').Router();
const Question = require('../models/Question');
let questions;

router.get('/today-question', async (req, res) => {
    // const question = new Question({
    //     question: 'What is 1 + 1?',
    //     answers: {
    //         choice_one: '4',
    //         choice_two: '10', 
    //         choice_three: '2', 
    //         choice_four: '3'
    //     },
    //     correct_answer: 3,
    //     reasoning: 'Because of basic math!'
    // });

    // return res.status(200).json(question);
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

async function setTodayQuestion() {
    questions = await Question.find();
    var i;
    for(i = 0; i < questions.length; i++) {
        if(questions[i].visited) {
            continue;
        } else {
            todayQuestion = questions[i];
            questions[i].visited = true;
            break;
        }
    }
}
module.exports = router;