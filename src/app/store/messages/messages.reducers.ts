import { createReducer, on } from '@ngrx/store';
import { MessageActions } from './messages.actions';
import { IPayloadStatus, payloadStatus } from '../interfaces';


export const initialState: IPayloadStatus = {
  pStatus: payloadStatus.pending,
  data: [],
  error: '',
}

export const beersReducer = createReducer(
  initialState,

  on(MessageActions.addMessage, (state, { }) => ({ ...state, pStatus: payloadStatus.loading })),

  on(MessageActions.addMessageSuccess, (state, { message, pStatus }) => ({ ...state, pStatus: pStatus, data: message })),

  on(MessageActions.addMessageError, (state, { error, pStatus }) =>
    ({ ...state, error: 'an error occurred while adding the beer', pStatus: pStatus })
  )

);
