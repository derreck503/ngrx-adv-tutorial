import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../store/reducers';
import { Observable } from 'rxjs';
import * as fromRoot from '../../store/reducers';
import { LoadShips } from '../store/actions/ships.actions';
import { StarShip } from '../models/star-ships.model';

@Component({
  selector: 'app-ship-list',
  templateUrl: './ship-list.component.html',
  styleUrls: ['./ship-list.component.css']
})
export class ShipListComponent implements OnInit {
  starships$: Observable<StarShip[]>;
  user$: Observable<string>;

  constructor(private store: Store<fromStore.State>) {}

  ngOnInit() {
    this.starships$ = this.store.select(fromStore.getAllShips);
    this.user$ = this.store.select(fromRoot.getFriendlyName);

    this.store.dispatch(new LoadShips());
  }
}
