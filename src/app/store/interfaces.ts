import User from "../models/userModel";
import Message from "../models/messageModel";
import Room from "../models/roomModel";

export interface AppState {
  users?: User[];
  user?: User;
  messages?: Message[];
  rooms?: Room[];
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


