import { createActionGroup, emptyProps, props } from '@ngrx/store';
import User from "../../models/userModel";
import {payloadStatus} from "../interfaces";
import Message from "../../models/messageModel";

// BASIC ACTIONS WHICH HANDLE USERS
export const UsersActions= createActionGroup({
  source: 'Users',
  events: {
    getUsers: emptyProps(),
    getUsersSuccess: props<{ users: User[]; pStatus: payloadStatus }>(),
    getUsersError: props<{ pStatus: payloadStatus; error: string }>(),

    addUser: props<{ user: User }>(),
    addUserSuccess: props<{ user: User; pStatus: payloadStatus }>(),
    addUserError: props<{ pStatus: payloadStatus; error: string }>(),

  },
});
