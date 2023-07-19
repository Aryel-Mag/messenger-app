import { Component } from '@angular/core';
import Message from "../../../../models/messageModel";
import {Observable, Subject, Subscription, switchMap} from "rxjs";
import {Store} from "@ngrx/store";
import {selectSentMessage} from "../../../../store/messages/messages.selectors";
import {map, tap} from "rxjs/operators";
import Room from "../../../../models/roomModel";
import {selectAllRooms} from "../../../../store/rooms/rooms.selectors";
import {selectUser} from "../../../../store/users/users.selectors";
import {SocketService} from "../../../../services/socket.service";
import {RoomsActions} from "../../../../store/rooms/rooms.actions";
import User from "../../../../models/userModel";
import {ViewportScroller} from "@angular/common";


@Component({
  selector: 'app-chat-main',
  templateUrl: './chat-main.component.html',
  styleUrls: ['./chat-main.component.scss']
})
export class ChatMainComponent {
  public messages: Message[] = [];

  public sub1!: Subscription;
  public sub2!: Subscription;
  public sub3!: Subscription;

  public user$!: Observable<User>;
  user: User = new User('', '');

  constructor(
    private readonly _store: Store,
    private _socketService: SocketService,
    private _viewportScroller: ViewportScroller
) { }

  ngOnInit() {
    let rooms: Observable<Room[]>;

    rooms = this._store.select(selectAllRooms).pipe(
      switchMap((rooms: Room[]) => {
        console.log(rooms)
        return rooms as Room[]
      })
    );

    this.user$ = this._store.select(selectUser);
    this.sub1 = this.user$.subscribe( user => { this.user = user; });

    this.sub2 = this.allRooms$.subscribe( rooms => {
      if(rooms.length > 0) {
        const chatLength: string = (rooms[0].messages.length - 1).toString();
        //this._viewportScroller.scrollToAnchor(chatLength)
      }});

    this._socketService.onSendMessage();

    this.sub3 = this._socketService.onSendMessage().subscribe(message => {
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
    if(this.sub3) {
      this.sub3.unsubscribe();
    }
  }
}
