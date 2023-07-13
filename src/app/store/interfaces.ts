import User from "../models/userModel";

export interface AppState {
  users?: User[];
  loggedUser?: User;

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


