import { Army } from './army';

export class ShadowArmy extends Army {
    /**
     *
     */
    constructor(standardCount: number, eliteCount: number) {
        super(standardCount, eliteCount);
    }

    nazghulCount: number;
}