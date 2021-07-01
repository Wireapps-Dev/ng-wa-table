import { TestBed } from '@angular/core/testing';

import { NgWaTableService } from './ng-wa-table.service';

describe('NgWaTableService', () => {
  let service: NgWaTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgWaTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
