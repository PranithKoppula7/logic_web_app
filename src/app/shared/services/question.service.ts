import { Injectable } from '@angular/core';
import { Question } from '../models/question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor() { }

  getQuestion() {
    return QUESTIONS;
  }
}

const QUESTIONS: Question[] = [
  {
    question: 'What is 1 + 1?',
    answers: {
      choice_one: '3', 
      choice_two: '4', 
      choice_three: '2', 
      choice_four: '5'
    },
    correct_answer: 3, 
    reasoning: 'Because of basic math'
  }
]