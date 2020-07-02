import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatDialogRef, MatDialogModule } from '@angular/material/dialog';

import { TodayQuestionComponent } from './today-question.component';

describe('TodayQuestionComponent', () => {
  let component: TodayQuestionComponent;
  let fixture: ComponentFixture<TodayQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodayQuestionComponent ],
      imports: [HttpClientTestingModule, MatDialogModule],
      providers: [ { provide: MatDialogRef, useValue: {}}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodayQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
