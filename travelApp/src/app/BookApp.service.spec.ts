/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BookAppService } from './BookApp.service';

describe('Service: BookApp', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookAppService]
    });
  });

  it('should ...', inject([BookAppService], (service: BookAppService) => {
    expect(service).toBeTruthy();
  }));
});
