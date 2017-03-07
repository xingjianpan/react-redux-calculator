import { combineReducers } from 'redux';

const INITIAL_STATE = {
  SCREEN: 0,
  screenScale: 1,
};

const CalculatorReducer = (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case ('AC'):
      return INITIAL_STATE;
    case 'CHANGE_SCALE':
      return {...state, screenScale: action.payload };
    case ('NUMERIC_KEY'):
      const current_screen = state.SCREEN;
      const new_screen = "" + current_screen + action.payload;
      return {...state, SCREEN: new_screen}
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  calculator: CalculatorReducer,
});

export default rootReducer;
