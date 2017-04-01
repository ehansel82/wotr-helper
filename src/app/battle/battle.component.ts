import { Component, OnInit } from '@angular/core';

import { RollService } from '../services/roll.service';
import { ShadowArmy, FreeArmy } from '../models/armies';
import { BattleService, BattleLocation, RoundResult } from '../services/battle.service';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.css']
})
export class BattleComponent implements OnInit {

  constructor(private rollService: RollService,
              private battleService: BattleService) { 
    this.result = new RoundResult();
  }

  freeRegular: number;
  freeElite: number;
  shadowRegular: number;
  shadowElite: number;
  location: BattleLocation;
  result: RoundResult;
  messages: string[];

  startBattle(): void {
    let sA = new ShadowArmy(this.shadowRegular, this.shadowElite);
    let fA = new FreeArmy(this.freeRegular, this.freeElite);
    let loc = BattleLocation.Field;
    this.battleService.Init(fA, sA, loc);
    this.battleService.Status.subscribe(x => {
      this.messages.push(x);
    });
    this.result =  this.battleService.commence();
  }

  ngOnInit() {
    this.freeRegular = 0;
    this.freeElite = 0;
    this.shadowRegular = 0;
    this.shadowElite = 0;
    this.messages = [];
  }

}
