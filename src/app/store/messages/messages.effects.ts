import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import HttpService from '../../services/HttpService';
import { MessageActions } from './messages.actions';
import { payloadStatus } from '../interfaces';
import { catchError, exhaustMap, map, tap } from 'rxjs/operators';
import { of } from 'rxjs';


@Injectable()
export class MessageEffects {
  //CONNECTS TO THE DATABASE AND LAUNCHES AN ACTION ACCORDING TO THE RESPONSE
  addMessage = createEffect(() =>
    this.actions$.pipe(
      ofType(MessageActions.addMessage),
      exhaustMap((payload: any) => {
        return this._httpService.postMessage(payload.message).pipe(
          map((message) => MessageActions.addMessageSuccess({  message, pStatus: payloadStatus.success })),
          catchError(
            () => of(MessageActions.addMessageError({
              pStatus: payloadStatus.error, error: 'An error occurred while adding the messages '
            }))))
      })
    )
  );

  constructor(private actions$: Actions, private _httpService: HttpService) { }
}
