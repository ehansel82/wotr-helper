import { ShadowArmy, FreeArmy } from './armies';
import { RollService } from '../services/roll.service';
import { Observable, Subject } from 'rxjs';
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
        location: BattleLocation,
        private _rollService: RollService) {
        this.isResolved = false;
        this.round = 0;
        this._startingFreeArmy = _.cloneDeep(freeArmy);
        this._startingShadowArmy = _.cloneDeep(shadowArmy);
        this.freeArmy = _.cloneDeep(freeArmy);
        this.shadowArmy = _.cloneDeep(shadowArmy);

    }

    private _startingFreeArmy: FreeArmy;
    private _startingShadowArmy: ShadowArmy;

    private _status: Subject<string> = new Subject<string>();

    public Status = this._status.asObservable();

    public freeArmy: FreeArmy;
    public shadowArmy: ShadowArmy;
    public round: number;
    public isResolved: boolean;

    public commence() {
        let result = new RoundResult();
        result.freeRoll = this._rollService.roll(this.freeArmy.combatStrength);
        this._status.next("Free people rolled!");
        result.shadowRoll = this._rollService.roll(this.shadowArmy.combatStrength);
        this._status.next("Shadow rolled!");
        

        return result;
    }
}

export class RoundResult {
    freeRoll: number[];
    shadowRoll: number[];
}