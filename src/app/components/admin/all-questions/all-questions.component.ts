import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/shared/models/question';
import { QuestionService } from 'src/app/shared/services/question.service';

@Component({
  selector: 'app-all-questions',
  templateUrl: './all-questions.component.html',
  styleUrls: ['./all-questions.component.scss']
})
export class AllQuestionsComponent implements OnInit {

  questions: Question[];
  displayedColumns: string[] = ['question', 'actions'];

  constructor(private questionService: QuestionService) { 
    this.questionService.getAllQuestions().subscribe((res: Question[]) => {
      this.questions = res;
    });
  }

  ngOnInit(): void {
  }

}
