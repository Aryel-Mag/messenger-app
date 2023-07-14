import { createActionGroup, emptyProps, props } from '@ngrx/store';
import User from "../../models/userModel";
import {payloadStatus} from "../interfaces";
import Message from "../../models/messageModel";


export const UsersActions= createActionGroup({
  source: 'Users',
  events: {
    getUsers: emptyProps(),
    getUsersSuccess: props<{ users: User[]; pStatus: payloadStatus }>(),
    getUsersError: props<{ pStatus: payloadStatus; error: string }>(),

    createUser: props<{ user: User }>(),
    addBeerSuccess: props<{ user: User; pStatus: payloadStatus }>(),
    addBeerError: props<{ pStatus: payloadStatus; error: string }>(),

    addMessage: props<{ message: Message }>(),
    addMessageSuccess: props<{ message: User; pStatus: payloadStatus }>(),
    addMessageError: props<{ pStatus: payloadStatus; error: string }>(),
/*
    removeBeer: props<{ beerId: number }>(),
*/
  },
});
