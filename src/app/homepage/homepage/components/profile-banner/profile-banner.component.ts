import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import User from "../../../../models/userModel";
import {selectSentMessage} from "../../../../store/messages/messages.selectors";
import {selectUser} from "../../../../store/users/users.selectors";
import {Observable} from "rxjs";
import Message from "../../../../models/messageModel";
import {tap} from "rxjs/operators";

@Component({
  selector: 'app-profile-banner',
  templateUrl: './profile-banner.component.html',
  styleUrls: ['./profile-banner.component.scss']
})
export class ProfileBannerComponent {
  public user$!: Observable<User>;
  constructor(
    private readonly _store: Store
  ) { }

  ngOnInit() {

    this.user$ = this._store.select(selectUser)
    // this.list$ = this._beerList.getBeersAPI();
  }


}
