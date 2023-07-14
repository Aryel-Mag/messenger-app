import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';
import { IPayloadStatus } from '../interfaces';

export const selectUserState: MemoizedSelector<any, IPayloadStatus> = createFeatureSelector<IPayloadStatus>('user');

export const selectUser = createSelector(
  selectUserState,
  ({ data }: IPayloadStatus) => data ? data : []
);
