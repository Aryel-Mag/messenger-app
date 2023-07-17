import { createReducer, on } from '@ngrx/store';
import { MessageActions } from './messages.actions';
import { IPayloadStatus, payloadStatus } from '../interfaces';

// SETS THE STORE'S INITIAL STATE
export const initialState: IPayloadStatus = {
  pStatus: payloadStatus.pending,
  data: [],
  error: '',
}

// REDUCERS HANDLE THE DATA AND CREATE NEW STATES TO HANDLE THE MUTATIONS IN THE STORE.
// IMMUTABLE APPROACH
export const messagesReducers = createReducer(
  initialState,

  on(MessageActions.addMessage, (state, { }) => ({ ...state, pStatus: payloadStatus.loading })),

  on(MessageActions.addMessageSuccess, (state, { message, pStatus }) => {
    const data = [...state.data, message];
    return { ...state, pStatus: pStatus, data };
  }),

  on(MessageActions.addMessageError, (state, { error, pStatus }) =>
    ({ ...state, error: 'an error occurred while sending the message', pStatus: pStatus })
  )

);
