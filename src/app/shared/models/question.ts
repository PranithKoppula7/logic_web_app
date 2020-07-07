export class Question {
    question: string;
    answers: {
        choice_one: string,
        choice_two: string,
        choice_three: string,
        choice_four: string
    };
    correct_answer: number;
    reasoning: string;
    visited: boolean;
}