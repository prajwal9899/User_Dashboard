import { combineReducers } from 'redux';

import customizationReducer from './customizationReducer';
import { alertSlice } from './alertSlice';
import { userSlice } from './userSlice';
import { analyticsSlice } from './analyticsSlice';

const reducer = combineReducers({
  customization: customizationReducer,
  alerts: alertSlice.reducer,
  user: userSlice.reducer,
  analytics: analyticsSlice.reducer
});

export default reducer;
