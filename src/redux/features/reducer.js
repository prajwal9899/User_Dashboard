import { combineReducers } from 'redux';

import customizationReducer from './customizationReducer';
import { alertSlice } from './alertSlice';
import { userSlice } from './userSlice';

const reducer = combineReducers({
  customization: customizationReducer,
  alerts: alertSlice.reducer,
  user: userSlice.reducer
});

export default reducer;
