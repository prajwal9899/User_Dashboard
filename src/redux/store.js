import { configureStore } from '@reduxjs/toolkit';
import { alertSlice } from './features/alertSlice';
import { userSlice } from './features/userSlice';
import { analyticsSlice } from './features/analyticsSlice';


export default configureStore({
  reducer: {
    alerts: alertSlice.reducer,
    user: userSlice.reducer,
    analytics: analyticsSlice.reducer
  }
});
