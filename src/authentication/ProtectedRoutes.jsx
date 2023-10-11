import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { hideLoading, showLoading } from '../redux/features/alertSlice';
import axios from 'axios';
import { setUser } from '../redux/features/userSlice';
import { LoanAmount, LoanOutstandingBalance, NoOfAccounts } from '../redux/features/analyticsSlice';

const ProtectedRoutes = ({ children }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const getUser = async () => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_URL}/getUserData`,
        { token: localStorage.getItem('token') },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        }
      );
      console.log(res, 'Protected');

      if (res.data.success === true) {
        dispatch(setUser(res.data.data));
      } else {
        <Navigate to={'/login'} />;
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
    }
  };

  useEffect(() => {
    if (user !== null) {
      axios
        .get(`${process.env.REACT_APP_URL}/get-defaulters`, {
          params: {
            Registration_No: user.registrationNo
          }
        })
        .then((data) => {
          var defaulters = [];
          var item = data.data;
          var noOfAccounts = item.length
          var loanAmount = 0
          var loanOutstandingBalance = 0
          // console.log(item, "defaulters");
          for (let i = 0; i < item.length; i++) {
            loanAmount = Number(item[i].LoanAmount) + Number(loanAmount)
            loanOutstandingBalance = Number(item[i].LoanOutstandingBalance) + Number(loanOutstandingBalance)
          }
          dispatch(LoanAmount(loanAmount))
          dispatch(LoanOutstandingBalance(loanOutstandingBalance))
          dispatch(NoOfAccounts(noOfAccounts))
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [user]);

  useEffect(() => {
    if (!user) {
      getUser();
    }
  }, [user, getUser]);

  if (localStorage.getItem('token')) {
    return children;
  } else {
    return <Navigate to={'/login'} />;
  }
};

export default ProtectedRoutes;
