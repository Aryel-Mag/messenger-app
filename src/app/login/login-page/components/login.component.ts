import { Component } from '@angular/core';

import {FormControl, FormGroupDirective, NgForm} from '@angular/forms';
import User from "../../../models/userModel";
import {Store} from "@ngrx/store";
import {UsersActions} from "../../../store/users/users.actions";
import {ErrorStateMatcher} from '@angular/material/core';

import {Router} from "@angular/router";
import {Observable, Subscription} from "rxjs";
import {selectUser} from "../../../store/users/users.selectors";

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public user$!: Observable<User>;
  private sub: Subscription;
  constructor(private readonly _store: Store, private router: Router) { }

  usernameControl: FormControl<string|null> = new FormControl('');

  matcher = new MyErrorStateMatcher();

  user: User = new User('', '');

  public logUser(): void {
    if (this.usernameControl.value !== null && this.usernameControl.value!== '') {
      this.user.username = this.usernameControl.value;

      // SELECTS THE RIGHT PLACE IN THE STORE AND DISPATCHES THE ACTION TO ADD IT
      this.user$ = this._store.select(selectUser);
      this._store.dispatch(UsersActions.addUser({ user: this.user }));

      // CHECKS IF THE USER WAS CREATED IN THE DATABASE, WE CAN REDIRECT TO THE HOME PAGE
      this.sub = this.user$.subscribe(
        user => {
          if(user.username !== undefined) {
            this.router.navigate(['/app']).then(() => {});
          }},
      );

    } else {
      //THROWS AN ALERT AND ERROR IF THE USER DOESN'T ENTER ANYTHING
      alert('Please enter an user name');
      throw new Error('Please enter an user name');
    }
  }
}
