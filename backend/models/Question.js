const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema(
    {
        question: {
            type: String
        },
        answers: {
            choice_one: {
                type: String
            },
            choice_two: {
                type: String
            },
            choice_three: {
                type: String
            },
            choice_four: {
                type: String
            }
        },
        correct_answer: {
            type: Number
        },
        reasoning: {
            type: String
        },
        visited: {
            type: Boolean
        }
    },
    {
        collection: 'questions'
    }
);
module.exports = mongoose.model('Question', questionSchema);
