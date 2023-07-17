import { Component } from '@angular/core';
import {filter, Observable, skipUntil, Subscription, takeUntil} from "rxjs";
import User from "../../models/userModel";
import {Store} from "@ngrx/store";
import {selectUser} from "../../store/users/users.selectors";
import {Router} from "@angular/router";


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


    this.sub = this.user$.subscribe(
      user => {
        if (user.username === undefined) {
          alert('You must be logged in to access this page')
          this.router.navigate(['/home']).then();
        }
      },
    )

   /* this.user$.pipe(
      filter(user => user.username === undefined)
    ).subscribe(() => {
      this.router.navigate(['/home']);
    });*/
  }

  onDestroy() {
    this.sub.unsubscribe()
  }
}
