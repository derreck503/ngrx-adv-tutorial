import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromStore from '../store/reducers';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  name$: Observable<string>;

  constructor(private store: Store<fromStore.State>) {
    this.name$ = this.store.pipe(select(fromStore.getFriendlyName));
  }

  ngOnInit() {}
}
