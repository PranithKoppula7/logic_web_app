import { TestBed } from '@angular/core/testing';

import { QuestionCardService } from './question-card.service';

describe('QuestionCardService', () => {
  let service: QuestionCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestionCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
