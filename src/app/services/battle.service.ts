import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import * as _ from 'lodash';

import { RollService } from './roll.service';
import { ShadowArmy, FreeArmy } from '../models/armies';

export enum BattleLocation {
  Stronghold = 1,
  City = 2,
  Fortification = 3,
  Field = 4
}

@Injectable()
export class BattleService {

  private _startingFreeArmy: FreeArmy;
  private _startingShadowArmy: ShadowArmy;

  private _status: Subject<string> = new Subject<string>();

  public Status = this._status.asObservable();

  public freeArmy: FreeArmy;
  public shadowArmy: ShadowArmy;
  public round: number;
  public isResolved: boolean;

  constructor(private rollService: RollService) { }

  public Init(freeArmy: FreeArmy,
    shadowArmy: ShadowArmy,
    location: BattleLocation): void {
    this.isResolved = false;
    this.round = 0;
    this._startingFreeArmy = _.cloneDeep(freeArmy);
    this._startingShadowArmy = _.cloneDeep(shadowArmy);
    this.freeArmy = _.cloneDeep(freeArmy);
    this.shadowArmy = _.cloneDeep(shadowArmy);
  }

  public commence(): RoundResult {
    let result = new RoundResult();
    result.freeRoll = this.rollService.roll(this.freeArmy.combatStrength);
    this._status.next("Free people rolled!");
    result.shadowRoll = this.rollService.roll(this.shadowArmy.combatStrength);
    this._status.next("Shadow rolled!");
    return result;
  }

}

export class RoundResult {
  freeRoll: number[];
  shadowRoll: number[];
}
