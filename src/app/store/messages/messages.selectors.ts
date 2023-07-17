import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';
import { IPayloadStatus } from '../interfaces';

// CREATES A LINK TO APP STATE IN THE STORE
export const selectMessageState: MemoizedSelector<any, IPayloadStatus> = createFeatureSelector<IPayloadStatus>('message');

// CREATES A LINK TO THE MESSAGE STATE IN THE STORE
export const selectSentMessage = createSelector(
  selectMessageState,
  ({ data }: IPayloadStatus) => data ? data : []
);
