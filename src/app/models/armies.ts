export class Army {
    constructor(standardCount: number, eliteCount: number) {
        this.standardCount = standardCount;
        this.eliteCount = eliteCount;
    }
    public standardCount: number;
    public eliteCount: number;
}

export class FreeArmy extends Army {
    /**
     *
     */
    constructor(standardCount: number, eliteCount: number) {
        super(standardCount, eliteCount);
    }

    leaderCount: number;
}

export class ShadowArmy extends Army {
    /**
     *
     */
    constructor(standardCount: number, eliteCount: number) {
        super(standardCount, eliteCount);
    }

    nazghulCount: number;
}