import { createReducer, on } from '@ngrx/store';
import { RoomsActions } from './rooms.actions';
import { IPayloadStatus, payloadStatus } from '../interfaces';
import Room from "../../models/roomModel";

// SETS THE STORE'S INITIAL STATE
export const initialState: IPayloadStatus = {
  pStatus: payloadStatus.pending,
  data: [],
  error: '',
}

// REDUCERS HANDLE THE DATA AND CREATE NEW STATES TO HANDLE THE MUTATIONS IN THE STORE.
// IMMUTABLE APPROACH
export const roomsReducers = createReducer(
  initialState,

  on(RoomsActions.getRooms, (state, { }) => ({ ...state, pStatus: payloadStatus.loading })),

  on(RoomsActions.getRoomsSuccess, (state, { rooms, pStatus }) => {
    const data = rooms;
    return { ...state, pStatus: pStatus, data };
  }),

  on(RoomsActions.getRoomsError, (state, { error, pStatus }) =>
    ({ ...state, error: 'an error occurred while loading rooms', pStatus: pStatus })
  )

);
