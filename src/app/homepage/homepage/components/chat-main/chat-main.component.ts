import { Component } from '@angular/core';
import {Observable, Subject, Subscription, switchMap} from "rxjs";
import {Store} from "@ngrx/store";
import Room from "../../../../models/roomModel";
import {selectRoom} from "../../../../store/rooms/rooms.selectors";
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
  public room$!: Observable<Room>;

  public sub1!: Subscription;
  public sub2!: Subscription;
  public sub3!: Subscription;

  public user$!: Observable<User>;
  user: User = new User('', '');

  constructor(
    private readonly _store: Store,
    private _socketService: SocketService,
  ) { }

  ngOnInit() {
    let rooms: Observable<Room[]>;

    this.room$ = this._store.select(selectRoom);

    this.user$ = this._store.select(selectUser);
    this.sub1 = this.user$.subscribe( user => { this.user = user; });

    this._socketService.onSendMessage();

    this.sub3 = this._socketService.onSendMessage().subscribe(message => {
      this._store.dispatch(RoomsActions.addMessage({message: message}));
    });

  }

  ngOnDestroy() {
    if(this.sub1) {
      this.sub1.unsubscribe();
    }
    if(this.sub3) {
      this.sub3.unsubscribe();
    }
  }
}
