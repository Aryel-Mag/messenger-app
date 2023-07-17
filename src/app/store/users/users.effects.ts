import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import HttpService from '../../services/HttpService';
import { UsersActions } from './users.actions';
import { payloadStatus } from '../interfaces';
import { catchError, exhaustMap, map, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import User from "../../models/userModel";
import {Router} from "@angular/router";


@Injectable()
export class UsersEffects {
  //CONNECTS TO THE DATABASE AND LAUNCHES AN ACTION ACCORDING TO THE RESPONSE
  addUser = createEffect(() =>
    this.actions$.pipe(
      ofType(UsersActions.addUser),
      exhaustMap((payload: any) => {
        return this._httpService.postUser(payload.user).pipe(
          map((user:User) => UsersActions.addUserSuccess({  user, pStatus: payloadStatus.success })),
          catchError(
            () => of(UsersActions.addUserError({
              pStatus: payloadStatus.error, error: 'An error occurred while creating the user'
            }))),
          // HANDLES THE RESPONSE AND REDIRECTS
          tap((payload: any) => {
            const user = payload.user;
            if(user && user.username !== undefined) {
              this._router.navigate(['/app']).then(() => {});
            }
          })
        )
      })
    )
  );

  constructor(private actions$: Actions, private _httpService: HttpService,
              private _router: Router) { }
}
