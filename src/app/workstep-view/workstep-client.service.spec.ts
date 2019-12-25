import { TestBed } from '@angular/core/testing';

import { WorkstepClientService } from './workstep-client.service';

describe('WorkstepClientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WorkstepClientService = TestBed.get(WorkstepClientService);
    expect(service).toBeTruthy();
  });
});
