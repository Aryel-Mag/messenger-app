import {createActionGroup, emptyProps, props} from "@ngrx/store";
import Message from "../../models/messageModel";
import {payloadStatus} from "../interfaces";

// BASIC ACTIONS WHICH HANDLE MESSAGES
export const MessageActions= createActionGroup({
  source: 'Messages',
  events: {
    getMessages: emptyProps(),
    getMessagesSuccess: props<{ messages: Message[]; pStatus: payloadStatus }>(),
    getMessagesError: props<{ pStatus: payloadStatus; error: string }>(),

    addMessage: props<{ message: Message }>(),
    addMessageSuccess: props<{ message: Message; pStatus: payloadStatus }>(),
    addMessageError: props<{ pStatus: payloadStatus; error: string }>(),
    /*
        removeBeer: props<{ beerId: number }>(),
    */
  },
});
