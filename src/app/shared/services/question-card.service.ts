import { Injectable } from '@angular/core';
import { Question } from '../models/question';

@Injectable({
  providedIn: 'root'
})
export class QuestionCardService {

  title: string;
  question: Question;

  constructor() { }

  createQuestionCard(title: string, question?: Question) {
    this.title = title;
    this.question = question;
  }

  getTitle() {
    return this.title;
  }

  getQuestion() {
    return this.question;
  }
}
