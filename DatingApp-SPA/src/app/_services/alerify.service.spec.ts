/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AlerifyService } from './alerify.service';

describe('Service: Alerify', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlerifyService]
    });
  });

  it('should ...', inject([AlerifyService], (service: AlerifyService) => {
    expect(service).toBeTruthy();
  }));
});
