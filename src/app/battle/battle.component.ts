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

  result: RoundResult;

  ngOnInit() {
    let sA = new ShadowArmy(2, 1);
    let fA = new FreeArmy(0, 5);
    let loc = BattleLocation.Field;
    let battle = this.battleService.newBattle(fA, sA, loc);
    this.result = this.battleService.commence(battle);
  }

}
