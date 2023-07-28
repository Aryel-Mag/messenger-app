import {createAction, createActionGroup, emptyProps, props} from "@ngrx/store";
import Message from "../../models/messageModel";
import {payloadStatus} from "../interfaces";
import Room from "../../models/roomModel";

// BASIC ACTIONS WHICH HANDLE MESSAGES
export const RoomsActions= createActionGroup({
  source: 'Rooms',
  events: {
    addMessage: props<{message: any}>(),

    getRooms: props<{ username: string }>(),
    getRoomsSuccess: props<{ rooms: Room[]; pStatus: payloadStatus }>(),
    getRoomsError: props<{ pStatus: payloadStatus; error: string }>(),

    addRoom: props<{ room: Room }>(),
    addRoomSuccess: props<{ room: Room; pStatus: payloadStatus }>(),
    addRoomError: props<{ pStatus: payloadStatus; error: string }>(),

    selectRoom: props<{ room: Room }>()
  },
});
