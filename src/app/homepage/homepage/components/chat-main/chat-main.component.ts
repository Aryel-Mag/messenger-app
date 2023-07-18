import { Component } from '@angular/core';
import Message from "../../../../models/messageModel";
import {Observable, Subject, Subscription} from "rxjs";
import {Store} from "@ngrx/store";
import {selectSentMessage} from "../../../../store/messages/messages.selectors";
import {tap} from "rxjs/operators";
import Room from "../../../../models/roomModel";
import {selectAllRooms} from "../../../../store/rooms/rooms.selectors";
import {selectUser} from "../../../../store/users/users.selectors";
import {SocketService} from "../../../../services/socket.service";
import {RoomsActions} from "../../../../store/rooms/rooms.actions";
import User from "../../../../models/userModel";

@Component({
  selector: 'app-chat-main',
  templateUrl: './chat-main.component.html',
  styleUrls: ['./chat-main.component.scss']
})
export class ChatMainComponent {
  public allRooms$!: Observable<Room[]>;
  public sub1!: Subscription;
  public sub2!: Subscription;

  public user$!: Observable<User>;
  user: User = new User('', '');

  constructor(
    private readonly _store: Store,
    private socketService: SocketService
) { }

  ngOnInit() {
    this.allRooms$ = this._store.select(selectAllRooms);

    this.user$ = this._store.select(selectUser);

    this.sub1 = this.user$.subscribe( user => { this.user = user; });

    this.socketService.onSendMessage();

    this.sub2 = this.socketService.onSendMessage().subscribe(message => {
      this._store.dispatch(RoomsActions.getRooms({username: this.user.username}))
    })
  }

  ngOnDestroy() {
    if(this.sub1) {
      this.sub1.unsubscribe();
    }
    if(this.sub2) {
      this.sub2.unsubscribe();
    }
  }
}
