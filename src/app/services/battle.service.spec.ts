import { TestBed, inject } from '@angular/core/testing';
import { BattleService } from './battle.service';

describe('BattleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BattleService]
    });
  });

  it('should ...', inject([BattleService], (service: BattleService) => {
    expect(service).toBeTruthy();
  }));
});
