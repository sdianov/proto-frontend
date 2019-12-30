import { TestBed } from '@angular/core/testing';

import { ApiSchemaService } from './api-schema.service';

describe('ApiSchemaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiSchemaService = TestBed.get(ApiSchemaService);
    expect(service).toBeTruthy();
  });
});
