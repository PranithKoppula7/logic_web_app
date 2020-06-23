import { Component, OnInit } from '@angular/core';
import { MatRadioButton } from '@angular/material/radio';
import { QuestionService } from 'src/app/shared/services/question.service';
import { Question } from 'src/app/shared/models/question';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-today-question',
  templateUrl: './today-question.component.html',
  styleUrls: ['./today-question.component.scss']
})
export class TodayQuestionComponent implements OnInit {

  selectedOption: string;
  questions: Question[];
  correct: boolean = false;
  closed: boolean = false;

  constructor(private questionService: QuestionService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.questions = this.questionService.getQuestion();
  }

  onSubmit() {
    if(this.selectedOption == this.questions[0].correct_answer.toString()) {
      this.correct = true;
    }
    this.dialog.open(DialogComponent, {
      data: {
        correct: this.correct
      }
    }).afterClosed().subscribe((res) => {
      this.closed = true;
    })
  }
  onChange(event: MatRadioButton) {
    this.selectedOption = event.value;
  }

}
