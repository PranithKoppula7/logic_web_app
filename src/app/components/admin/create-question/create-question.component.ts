import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Question } from 'src/app/shared/models/question';
import { QuestionService } from 'src/app/shared/services/question.service';


@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.component.html',
  styleUrls: ['./create-question.component.scss']
})
export class CreateQuestionComponent implements OnInit {

  loading: boolean = false;
  question: Question = {
    question: '',
    answers: {
      choice_one: '',
      choice_two: '',
      choice_three: '',
      choice_four: ''
    },
    correct_answer: 0,
    reasoning: '',
    visited: false
  }

  constructor(private snackbar: MatSnackBar, private questionService: QuestionService) {
    
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.loading = true;
    if(this.question.question === "" 
      || this.question.answers.choice_one === ""
      || this.question.answers.choice_two === ""
      || this.question.answers.choice_three === ""
      || this.question.answers.choice_four === ""
      || this.question.correct_answer === 0
      || this.question.reasoning === "") {
        setTimeout(() => {
          this.snackbar.open("Values are missing! Please fill in the fields", "", {
            duration: 3000
          });
          this.loading = false;
        }, 3000)
        
    } else {
      this.questionService.createQuestion(this.question).subscribe((res: any) => {
        this.loading = false;
        this.snackbar.open(res.message, "", {
          duration: 5000
        });
        this.question.question = "",
        this.question.answers.choice_one = "",
        this.question.answers.choice_two = "",
        this.question.answers.choice_three = "",
        this.question.answers.choice_four = "",
        this.question.correct_answer = 0,
        this.question.reasoning = ""
      }, (err) => {
        this.snackbar.open(err.message, "", {
          duration: 3000
        });
      });
    }
    
  }

}
