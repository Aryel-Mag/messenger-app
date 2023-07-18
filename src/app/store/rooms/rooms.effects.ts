import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import HttpService from '../../services/HttpService';
import { RoomsActions } from './rooms.actions';
import { payloadStatus } from '../interfaces';
import { catchError, exhaustMap, map, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import Room from "../../models/roomModel";


@Injectable()
export class RoomsEffects {
  //CONNECTS TO THE DATABASE AND LAUNCHES AN ACTION ACCORDING TO THE RESPONSE
  loadRooms$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RoomsActions.getRooms),
      exhaustMap((payload: any) => {
        return this._httpService.getRooms(payload.username).pipe(
          map((rooms: Room[]) => RoomsActions.getRoomsSuccess({ rooms,  pStatus: payloadStatus.success })),
          catchError(
            () => of(RoomsActions.getRoomsError({
              pStatus: payloadStatus.error, error: 'An error occurred while loading the room list'
            }))))
      })
    )
  );

  constructor(private actions$: Actions, private _httpService: HttpService) { }
}
