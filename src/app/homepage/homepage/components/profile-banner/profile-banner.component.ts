import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import User from "../../../../models/userModel";
import {selectUser} from "../../../../store/users/users.selectors";
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-profile-banner',
  templateUrl: './profile-banner.component.html',
  styleUrls: ['./profile-banner.component.scss']
})
export class ProfileBannerComponent {
  public user$!: Observable<User>;
  private sub!: Subscription;
  private username!: string;

  constructor(
    private readonly _store: Store
  ) { }

  ngOnInit() {
    // SELECTS USER IN THE STORE AND DISPLAYS IT IN THE TEMPLATE
    this.user$ = this._store.select(selectUser)

  }
}
