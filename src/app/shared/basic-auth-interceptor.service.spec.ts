import { TestBed } from '@angular/core/testing';

import { BasicAuthHtppInterceptorService } from './basic-auth-interceptor.service';

describe('BasicAuthInterceptorService', () => {
  let service: BasicAuthHtppInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasicAuthHtppInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
