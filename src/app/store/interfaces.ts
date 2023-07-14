import User from "../models/userModel";
import Message from "../models/messageModel";

export interface AppState {
  users?: User[];
  user?: User;
  message?: Message;
}

export enum payloadStatus {
  pending = 'pending',
  loading = 'loading',
  success = 'success',
  error = 'error'
}

export interface IPayloadStatus {
  data: any;
  pStatus: payloadStatus;
  error: string;
}


