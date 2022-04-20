import { TestBed } from '@angular/core/testing';

import { DefaultTaskServiceService } from './default-task-service.service';

describe('DefaultTaskServiceService', () => {
  let service: DefaultTaskServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DefaultTaskServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
