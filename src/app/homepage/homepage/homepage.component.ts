import { Component } from '@angular/core';
import {filter, Observable, skipUntil, takeUntil} from "rxjs";
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
  constructor(
    private readonly _store: Store, private readonly router : Router
  ) { }

  ngOnInit() {

    this.user$ = this._store.select(selectUser);


    this.user$.subscribe(
      user => {console.log(user.username);
        if(user.username === undefined) this.router.navigate(['/home']
      )},
    )

   /* this.user$.pipe(
      filter(user => user.username === undefined)
    ).subscribe(() => {
      this.router.navigate(['/home']);
    });*/
  }

  onDestroy() {
/*
    this.user$.unsubscribe();
*/
  }
}
