import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { increment, decrement } from './counter-actions';

const valueReducer = createReducer(0, {
  [increment]: (state, { payload }) => state + payload,
  [decrement]: (state, { payload }) => state - payload,
});

const stepReducer = (state = 1) => state;

export default combineReducers({
  counterValue: valueReducer,
  step: stepReducer,
});
