import { combineReducers } from 'redux';
import actionTypes from './counter-types';

//     counter: {
//         counterValue: 0,
//         step: 1,
//     },
// };

// const reducer = (state = initialState, {type, payload}) => {
//     switch (type) {
//         case 'counter/Increment':
//             return {
//                 ...state,
//                 counter: {
//                     ...state.counter,
//                     counterValue: state.counter.counterValue + payload
//                 }
//             };

//         case 'counter/Decrement':
//             return {
//                 ...state,
//                 counter: {
//                     ...state.counter,
//                     counterValue: state.counter.counterValue - payload
//                 }
//             };

//             default:
//                 return state;
//     }
// };

const valueReducer = (state = 0, { type, payload }) => {
  switch (type) {
    case actionTypes.INCREMENT:
      return state + payload;

    case actionTypes.DECREMENT:
      return state - payload;

    default:
      return state;
  }
};

const stepReducer = (state = 1, action) => state;

export default combineReducers({
  counterValue: valueReducer,
  step: stepReducer,
});
