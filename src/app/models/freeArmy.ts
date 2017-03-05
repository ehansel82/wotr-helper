import { Army } from './army';

export class FreeArmy extends Army {
    /**
     *
     */
    constructor(standardCount: number, eliteCount: number) {
        super(standardCount, eliteCount);
    }

    leaderCount: number;
}