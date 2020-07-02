import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayQuestionComponent } from './today-question.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatDialog } from '@angular/material/dialog';

describe('TodayQuestionComponent', () => {
  let component: TodayQuestionComponent;
  let fixture: ComponentFixture<TodayQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodayQuestionComponent ],
      imports: [HttpClientTestingModule],
      providers: [ MatDialog]
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
