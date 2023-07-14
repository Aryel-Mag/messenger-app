import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import HttpService from '../../services/HttpService';
import { UsersActions } from './users.actions';
import { payloadStatus } from '../interfaces';
import { catchError, exhaustMap, map, tap } from 'rxjs/operators';
import { of } from 'rxjs';


@Injectable()
export class UsersEffects {
  /*loadBeers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BeersAction.getBeers),
      exhaustMap(() => {
        return this._httpService.getBeersAPI().pipe(
          map((beersList) => BeersAction.getBeersSuccess({ beers: beersList, pStatus: payloadStatus.success })),
          catchError(
            () => of(BeersAction.getBeersError({
              pStatus: payloadStatus.error, error: 'An error occurred while loading the beer list'
            }))))
      })
    )
  );*/

  addUser = createEffect(() =>
    this.actions$.pipe(
      ofType(UsersActions.addUser),
      exhaustMap((payload: any) => {
        return this._httpService.postUser(payload.user).pipe(
          map((user) => UsersActions.addUserSuccess({  user, pStatus: payloadStatus.success })),
          catchError(
            () => of(UsersActions.addUserError({
              pStatus: payloadStatus.error, error: 'An error occurred while creating the user'
            }))))
      })
    )
  );

  constructor(private actions$: Actions, private _httpService: HttpService) { }
}
