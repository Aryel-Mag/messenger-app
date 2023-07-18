import { Component } from '@angular/core';
import {filter, Observable, skipUntil, Subscription, takeUntil} from "rxjs";
import User from "../../models/userModel";
import {Store} from "@ngrx/store";
import {selectUser} from "../../store/users/users.selectors";
import {Router} from "@angular/router";
import {RoomsActions} from "../../store/rooms/rooms.actions";
import {selectAllRooms} from "../../store/rooms/rooms.selectors";
import Room from "../../models/roomModel";


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
  public user$!: Observable<User>;
  private sub!:Subscription;
  constructor(
    private readonly _store: Store, private readonly router : Router
  ) { }

  ngOnInit() {

    this.user$ = this._store.select(selectUser);
    // CHECKS IF USER IS LOGGED IN
    this.sub = this.user$.subscribe(
      user => {
        if (user.username === undefined) {
          alert('You must be logged in to access this page')
          this.router.navigate(['/home']).then();
        } else {
          this._store.dispatch(RoomsActions.getRooms({username: user.username}));
        }
      },
    )

  }

  onDestroy() {
    if(this.sub){
      this.sub.unsubscribe();
    }
  }
}
