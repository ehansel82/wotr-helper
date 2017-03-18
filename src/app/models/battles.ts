import { ShadowArmy, FreeArmy } from './armies';
import * as _ from 'lodash';

export enum BattleLocation {
    Stronghold = 1,
    City = 2,
    Fortification = 3,
    Field = 4
}

export class Battle {
    constructor(freeArmy: FreeArmy,
        shadowArmy: ShadowArmy,
        location: BattleLocation) {
        this.isResolved = false;
        this.round = 0;
        this._startingFreeArmy = _.cloneDeep(freeArmy);
        this._startingShadowArmy = _.cloneDeep(shadowArmy);
        this.freeArmy = _.cloneDeep(freeArmy);
        this.shadowArmy = _.cloneDeep(shadowArmy);
    }

    private _startingFreeArmy: FreeArmy;
    private _startingShadowArmy: ShadowArmy;

    public freeArmy: FreeArmy;
    public shadowArmy: ShadowArmy;
    public round: number;
    public isResolved: boolean;
}

export class RoundResult{
    freeRoll: number[];
    shadowRoll: number[]; 
}