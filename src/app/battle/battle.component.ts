import { Component, OnInit } from '@angular/core';
import { ShadowArmy, FreeArmy } from '../models/armies';
import { BattleLocation, RoundResult } from '../models/battles';
import { BattleService } from '../services/battle.service';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.css']
})
export class BattleComponent implements OnInit {

  constructor(private battleService: BattleService) { 
    this.result = new RoundResult();
  }

  freeRegular: number;
  freeElite: number;
  shadowRegular: number;
  shadowElite: number;
  location: BattleLocation;
  result: RoundResult;

  startBattle(): void {
    let sA = new ShadowArmy(this.shadowRegular, this.shadowElite);
    let fA = new FreeArmy(this.freeRegular, this.freeElite);
    let loc = BattleLocation.Field;
    let battle = this.battleService.newBattle(fA, sA, loc);
    this.result = this.battleService.commence(battle);
  }

  ngOnInit() {
  }

}
