import { Component, OnInit } from '@angular/core';

import { RollService } from '../services/roll.service';
import { ShadowArmy, FreeArmy } from '../models/armies';
import { Battle, BattleLocation, RoundResult } from '../models/battles';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.css']
})
export class BattleComponent implements OnInit {

  constructor(private rollService: RollService) { 
    this.result = new RoundResult();
  }

  freeRegular: number;
  freeElite: number;
  shadowRegular: number;
  shadowElite: number;
  location: BattleLocation;
  result: RoundResult;
  battle: Battle;
  messages: string[];

  startBattle(): void {
    let sA = new ShadowArmy(this.shadowRegular, this.shadowElite);
    let fA = new FreeArmy(this.freeRegular, this.freeElite);
    let loc = BattleLocation.Field;
    this.battle = new Battle(fA, sA, loc, this.rollService);
    this.battle.Status.subscribe(x => {
      this.messages.push(x);
    });
    this.result =  this.battle.commence();
  }

  ngOnInit() {
    this.freeRegular = 0;
    this.freeElite = 0;
    this.shadowRegular = 0;
    this.shadowElite = 0;
    this.messages = [];
  }

}
