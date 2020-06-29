import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  private todayquestionapi = "http://localhost:3000/api/questions/today-question";

  constructor(private http: HttpClient) { }

  getTodayQuestion() {
    return this.http.get(this.todayquestionapi);
  }
}