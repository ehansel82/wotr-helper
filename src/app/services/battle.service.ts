import { Injectable } from '@angular/core';
import { ShadowArmy, FreeArmy } from '../models/armies';
import { BattleLocation, Battle, RoundResult } from '../models/battles';
import { RollService } from './roll.service';

@Injectable()
export class BattleService {

  constructor(private rollService: RollService) { }

  public newBattle(freeArmy: FreeArmy, 
                  shadowArmy: ShadowArmy, 
                  location: BattleLocation): Battle {
     return new Battle(freeArmy, shadowArmy, location);
  }

  public commence(battle:Battle){
    let result = new RoundResult();
    result.freeRoll = this.rollService.roll(battle.freeArmy.combatStrength);
    result.shadowRoll = this.rollService.roll(battle.shadowArmy.combatStrength);
    return result;
  }

}
