import { combineReducers } from "redux";

import customizationReducer from "./customizationReducer";
import { alertSlice } from "./alertSlice";
import { userSlice } from "./userSlice";
import { analyticsSlice } from "./analyticsSlice";
import { defaultersSlice } from "./defaultersSlice";

const reducer = combineReducers({
  customization: customizationReducer,
  alerts: alertSlice.reducer,
  user: userSlice.reducer,
  analytics: analyticsSlice.reducer,
  defaulter: defaultersSlice.reducer,
});

export default reducer;
