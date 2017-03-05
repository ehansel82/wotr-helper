import { Leader } from './leader';

export class Gandalf extends Leader {

    private _isTheWhite: boolean;

    public get isTheWhite(): boolean {
        return this._isTheWhite;
    }

    public set isTheWhite(isTheWhite: boolean) {
        this.leadership = 2;
        this._isTheWhite = true;
    }
}