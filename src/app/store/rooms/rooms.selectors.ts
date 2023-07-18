import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';
import { IPayloadStatus } from '../interfaces';

// CREATES A LINK TO APP STATE IN THE STORE
export const selectRoomsState: MemoizedSelector<any, IPayloadStatus> = createFeatureSelector<IPayloadStatus>('rooms');

// CREATES A LINK TO THE MESSAGE STATE IN THE STORE
export const selectAllRooms = createSelector(
  selectRoomsState,
  ({ data }: IPayloadStatus) => data ? data : []
);
