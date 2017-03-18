export class Army {
    constructor(standardCount: number, eliteCount: number) {
        this.standardCount = standardCount;
        this.eliteCount = eliteCount;
    }
    public standardCount: number;
    public eliteCount: number;

    public get totalHits():number  {
        return (this.standardCount + (this.eliteCount + 2));
    }

    public get combatStrength():number  {
        return (this.standardCount + this.eliteCount);
    }
}

export class FreeArmy extends Army {
    constructor(standardCount: number, eliteCount: number) {
        super(standardCount, eliteCount);
    }

    leaderCount: number;
}

export class ShadowArmy extends Army {
    constructor(standardCount: number, eliteCount: number) {
        super(standardCount, eliteCount);
    }

    nazghulCount: number;
}