import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Question } from '../models/question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  private todayquestionapi = "http://localhost:3000/api/questions/today-question";
  private createquestion = "http://localhost:3000/api/questions/create-question";

  constructor(private http: HttpClient) { }

  getTodayQuestion() {
    return this.http.get(this.todayquestionapi);
  }

  createQuestion(question: Question) {
    return this.http.post(this.createquestion, question);
  }
}