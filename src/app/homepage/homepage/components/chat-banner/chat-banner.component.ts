import { Component } from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import Room from "../../../../models/roomModel";
import {selectAllRooms} from "../../../../store/rooms/rooms.selectors";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-chat-banner',
  templateUrl: './chat-banner.component.html',
  styleUrls: ['./chat-banner.component.scss']
})
export class ChatBannerComponent {
  public allRooms$!: Observable<Room[]>;
  constructor(private _store: Store) {
  }

  ngOnInit(): void {
    this.allRooms$ = this._store.select(selectAllRooms)
  }
}
