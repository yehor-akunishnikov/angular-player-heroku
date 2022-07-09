import * as fromReducer from './reducers';
import {combineReducers, createFeatureSelector, createSelector} from "@ngrx/store";

export const featureKey = '[PLAYER]';

export interface FeatureState {
  [featureKey]: fromReducer.State,
}

export const featureReducer = combineReducers({
  [featureKey]: fromReducer.reducer,
});

export const featureSelector = createFeatureSelector<FeatureState>(featureKey);

export const playerSelector = createSelector(
  featureSelector,
  (state) => state[featureKey],
);
