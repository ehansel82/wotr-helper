import { TestBed, inject } from '@angular/core/testing';
import { RollService } from './roll.service';

describe('RollService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RollService]
    });
  });

  it('should ...', inject([RollService], (service: RollService) => {
    expect(service).toBeTruthy();
  }));

    it('should have same results as dice', inject([RollService], (service: RollService) => {
      let results = service.roll(6);
      expect(results.length).toEqual(6);
  }));
});
