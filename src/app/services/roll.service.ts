import { Injectable } from '@angular/core';
import * as _ from 'lodash';

@Injectable()
export class RollService {

  constructor() { }

  roll(dice: number): number[] {
    let result: number[] = [];

    for (let i = 0; i < dice; i++) {
      result.push(_.random(1, 6));
    }
    return result;
  }

}
