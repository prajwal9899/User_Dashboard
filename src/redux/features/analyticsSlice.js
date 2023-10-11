import { createSlice } from '@reduxjs/toolkit';

export const analyticsSlice = createSlice({
  name: 'analytics',
  initialState: {
    NoOfAccounts: 0,
    LoanAmount: 0,
    LoanOutstandingBalance: 0
  },
  reducers: {
    NoOfAccounts: (state, action) => {
      state.NoOfAccounts = action.payload;
    },
    LoanAmount: (state, action) => {
      state.LoanAmount = action.payload;
    },
    LoanOutstandingBalance: (state, action) => {
      state.LoanOutstandingBalance = action.payload;
    }
  }
});

export const { NoOfAccounts, LoanOutstandingBalance, LoanAmount } = analyticsSlice.actions;

