import { Injectable } from '@angular/core';
import { ShadowArmy } from '../models/armies';
import { FreeArmy } from '../models/armies';
import { Location} from '../models/location';

@Injectable()
export class BattleService {

  constructor() { }

  private _freeArmy: FreeArmy;
  private _shadowArmy: ShadowArmy;
  private _location: Location;

  public newBattle(freeArmy: FreeArmy, shadowArmy: ShadowArmy, location:Location) {
    this._freeArmy = freeArmy;
    this._shadowArmy = shadowArmy;
    this._location = location;
  }

}
