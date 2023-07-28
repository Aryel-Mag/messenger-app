import {IPayloadStatus, payloadStatus} from "../interfaces";
import {createReducer, on} from "@ngrx/store";
import {MessageActions} from "../messages/messages.actions";
import {UsersActions} from "./users.actions";

//SETS THE STORE'S INITIAL STATE
export const initialState: IPayloadStatus = {
  pStatus: payloadStatus.pending,
  data: [],
  error: '',
}

// REDUCERS HANDLE THE DATA AND CREATE NEW STATES TO HANDLE THE MUTATIONS IN THE STORE.
// IMMUTABLE APPROACH
export const userReducers = createReducer(
  initialState,

  on(UsersActions.addUser, (state, { }) => ({ ...state, pStatus: payloadStatus.loading })),

  on(UsersActions.addUserSuccess, (state, { user, pStatus }) => {
    const data = user;
    return { ...state, pStatus: pStatus, data };
  }),

  on(UsersActions.addUserError, (state, { error, pStatus }) =>
    ({ ...state, error: 'an error occurred while logging in', pStatus: pStatus })
  )

);
