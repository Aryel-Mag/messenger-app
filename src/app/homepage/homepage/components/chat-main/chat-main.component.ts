import { Component } from '@angular/core';
import Message from "../../../../models/messageModel";
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {selectSentMessage} from "../../../../store/messages/messages.selectors";
import {tap} from "rxjs/operators";
import Room from "../../../../models/roomModel";
import {selectAllRooms} from "../../../../store/rooms/rooms.selectors";

@Component({
  selector: 'app-chat-main',
  templateUrl: './chat-main.component.html',
  styleUrls: ['./chat-main.component.scss']
})
export class ChatMainComponent {
  public allMessages$!: Observable<Message[]>;
  public allRooms$!: Observable<Room[]>;
  constructor(
    private readonly _store: Store
  ) { }

  ngOnInit() {
    this.allMessages$ = this._store.select(selectSentMessage)

    this.allRooms$ = this._store.select(selectAllRooms)


  }
}
