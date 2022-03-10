import { TestBed } from '@angular/core/testing';

import { UserguardsGuard } from './userguards.guard';

describe('UserguardsGuard', () => {
  let guard: UserguardsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UserguardsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
