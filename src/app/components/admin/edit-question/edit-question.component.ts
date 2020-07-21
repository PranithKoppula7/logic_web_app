import { Component, OnInit } from '@angular/core';

import { QuestionService } from 'src/app/shared/services/question.service';
import { Question } from 'src/app/shared/models/question';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit-question',
  templateUrl: './edit-question.component.html',
  styleUrls: ['./edit-question.component.scss']
})
export class EditQuestionComponent implements OnInit {
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
  _id: string;
  
  constructor(private questionService: QuestionService, private route: ActivatedRoute) {
    
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this._id = params.id;
    });

    this.questionService.getOneQuestion(this._id).subscribe((question: Question) => {
      console.log(question);
      this.question = question;
    });
  }

}
