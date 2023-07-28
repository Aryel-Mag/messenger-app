import { Component } from '@angular/core';
import {selectRoom} from "../../../../store/rooms/rooms.selectors";
import { BehaviorSubject, Observable } from "rxjs";
import Room from "../../../../models/roomModel";
import { Store } from "@ngrx/store";
@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.scss']
})
export class ChatListComponent {
  public room$!: Observable<Room>;
  public titleSubject$:BehaviorSubject<string> = new BehaviorSubject('Main Chat')

  constructor(private readonly _store: Store) {
  }

  ngOnInit(): void {
    this.room$ = this._store.select(selectRoom);
  }
}
