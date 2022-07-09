import * as fromReducer from './reducers';
import {combineReducers, createFeatureSelector, createSelector} from "@ngrx/store";

export const featureKey = '[USER]';

export interface FeatureState {
  [featureKey]: fromReducer.State,
}

export const featureReducer = combineReducers({
  [featureKey]: fromReducer.reducer,
});

export const featureSelector = createFeatureSelector<FeatureState>(featureKey);

export const UserSelector = createSelector(
  featureSelector,
  (state) => state[featureKey],
);

export const RoleSelector = createSelector(
  UserSelector,
  (state) => state.role,
)
