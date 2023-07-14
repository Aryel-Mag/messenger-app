import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';
import { IPayloadStatus } from '../interfaces';

export const selectMessageState: MemoizedSelector<any, IPayloadStatus> = createFeatureSelector<IPayloadStatus>('beers');

export const selectSentMessage = createSelector(
  selectMessageState,
  ({ data }: IPayloadStatus) => data ? data : []
);
