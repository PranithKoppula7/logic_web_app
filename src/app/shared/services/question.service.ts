import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Question } from '../models/question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  private root = "http://localhost:3000/api/questions"

  constructor(private http: HttpClient) { }

  getTodayQuestion() {
    return this.http.get(this.root + "/today-question");
  }

  createQuestion(question: Question) {
    return this.http.post(this.root + "/create-question", question);
  }

  getAllQuestions() {
    return this.http.get(this.root);
  }
}