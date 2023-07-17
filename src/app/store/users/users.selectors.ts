import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';
import { IPayloadStatus } from '../interfaces';

// CREATES A LINK TO APP STATE IN THE STORE
export const selectUserState: MemoizedSelector<any, IPayloadStatus> = createFeatureSelector<IPayloadStatus>('user');

// CREATES A LINK TO USER STATE IN THE STORE
export const selectUser = createSelector(
  selectUserState,
  ({ data }: IPayloadStatus) => data ? data : []
);
