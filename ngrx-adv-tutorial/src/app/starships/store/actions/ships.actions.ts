import { Action } from '@ngrx/store';
import { StarShip } from '../../models/star-ships.model';

export enum ShipsActionTypes {
  LoadShips = '[Ships] Load Ships',
  SetShips = '[Ships] Set Ships'
}

export class LoadShips implements Action {
  readonly type = ShipsActionTypes.LoadShips;
}

export class SetShips implements Action {
  readonly type = ShipsActionTypes.SetShips;
  constructor(public payload: StarShip[]) {}
}

export type ShipsActions = LoadShips | SetShips;
