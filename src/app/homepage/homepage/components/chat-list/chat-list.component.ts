import { Component } from '@angular/core';
import User from 'src/app/models/userModel';
import {selectAllRooms} from "../../../../store/rooms/rooms.selectors";
import {Observable} from "rxjs";
import Room from "../../../../models/roomModel";
import {Store} from "@ngrx/store";
import {tap} from "rxjs/operators";
@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.scss']
})
export class ChatListComponent {
  public allRooms$!: Observable<Room[]>;

  constructor(private readonly _store: Store) {
  }

  ngOnInit(): void {
    this.allRooms$ = this._store.select(selectAllRooms)
  }

}
