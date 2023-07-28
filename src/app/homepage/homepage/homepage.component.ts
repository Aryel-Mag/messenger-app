import { Component } from '@angular/core';
import {filter, Observable, skipUntil, Subscription, switchMap, takeUntil} from "rxjs";
import User from "../../models/userModel";
import {Store} from "@ngrx/store";
import {selectUser} from "../../store/users/users.selectors";
import {Router} from "@angular/router";
import {RoomsActions} from "../../store/rooms/rooms.actions";
import {selectAllRooms} from "../../store/rooms/rooms.selectors";
import Room from "../../models/roomModel";
import {map} from "rxjs/operators";
import Message from "../../models/messageModel";


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
  public allRooms$!: Observable<Room[]>;
  public user$!: Observable<User>;

  private sub1!:Subscription;
  constructor(
    private readonly _store: Store, private readonly router : Router
  ) { }

  ngOnInit() {
    this.user$ = this._store.select(selectUser);
    // CHECKS IF USER IS LOGGED IN
    this.sub1 = this.user$.subscribe(
      user => {
        if (user.username === undefined) {
          alert('You must be logged in to access this page')
          this.router.navigate(['/home']).then();
        } else {
          this._store.dispatch(RoomsActions.getRooms({username: user.username}));
          this.allRooms$ = this._store.select(selectAllRooms)
            .pipe(
              map(rooms => {
                if(rooms.length > 0) this._store.dispatch(RoomsActions.selectRoom({room: rooms[0]}));
                return rooms;
              })
            );
        }
      },
    )

  }

  onDestroy() {
    if(this.sub1) this.sub1.unsubscribe();
  }
}
