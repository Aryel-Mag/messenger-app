import { createReducer, on } from '@ngrx/store';
import { RoomsActions } from './rooms.actions';
import { IPayloadStatus, payloadStatus } from '../interfaces';
import Room from "../../models/roomModel";
import {UsersActions} from "../users/users.actions";

// SETS THE STORE'S INITIAL STATE
export const roomsInitialState: IPayloadStatus = {
  pStatus: payloadStatus.pending,
  data: [],
  error: '',
}

export const roomInitialState: IPayloadStatus = {
  pStatus: payloadStatus.pending,
  data: null,
  error: '',
}


// REDUCERS HANDLE THE DATA AND CREATE NEW STATES TO HANDLE THE MUTATIONS IN THE STORE.
// IMMUTABLE APPROACH
export const roomsReducers = createReducer(
  roomsInitialState,

  on(RoomsActions.getRooms, (state, { }) => ({ ...state, pStatus: payloadStatus.loading })),

  on(RoomsActions.getRoomsSuccess, (state, { rooms, pStatus }) => {
    const data = rooms;
    return { ...state, pStatus: pStatus, data };
  }),

  on(RoomsActions.getRoomsError, (state, { error, pStatus }) =>
    ({ ...state, error: 'an error occurred while loading rooms', pStatus: pStatus })
  )

);

export const roomReducers = createReducer(
  roomInitialState,

  on(RoomsActions.addMessage, (state, { message }) => {
    const data: Room = {...state.data};
    data.messages = data.messages.concat(message);
    return { ...state, data };
  }),

  on(RoomsActions.selectRoom, (state, { room }) => {
    const data: Room = room;
    return { ...state, data };
  })

);
