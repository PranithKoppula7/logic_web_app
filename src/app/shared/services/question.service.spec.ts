import { TestBed, inject, tick } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { QuestionService } from './question.service';

describe('QuestionService', () => {
  let service: QuestionService;
  let todayquestionapi = "http://localhost:3000/api/questions/today-question";

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(QuestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getQuestions()', () => {
    it('should return a get call and have defined properties of a question', ()=> {
      inject(
        [HttpTestingController],
        (backend: HttpTestingController) => {

          let response = null;

          service.getTodayQuestion().subscribe((res: any) => {
            response = res;
          });

          const requestWrapper = backend.expectOne({ url: todayquestionapi });

          tick();

          expect(response.status).toBe(200);
          expect(requestWrapper.request.method).toEqual('GET');
          expect(response.question).toBeDefined();
          expect(response.answers).toBeDefined();
          expect(response.reasoning).toBeDefined();
          expect(response.correct_answer).toBeDefined();
        }
      )
    });
  });
});
