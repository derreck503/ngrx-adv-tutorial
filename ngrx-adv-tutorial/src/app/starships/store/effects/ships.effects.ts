import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { ShipsActionTypes, ShipsActions } from '../actions/ships.actions';
import { switchMap, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import * as shipActions from '../actions/ships.actions';

@Injectable()
export class ShipsEffects {
  constructor(
    private actions$: Actions<ShipsActions>,
    private http: HttpClient
  ) {}

  @Effect()
  loadShips$ = this.actions$.pipe(
    ofType(ShipsActionTypes.LoadShips),
    switchMap(() => {
      return this.http.get<any>(`https://swapi.co/api/starships`).pipe(
        map(response => {
          return new shipActions.SetShips(response.results);
        })
      );
    })
  );
}
