/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import {
  Box,
  Button,
  Divider,
  FormHelperText,
  Grid,
  TextField,
  Typography,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton
} from '@mui/material';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Google from 'assets/images/social-google.svg';
import { LoadingButton } from '@mui/lab';

const FirebaseLogin = ({ ...rest }) => {
  const theme = useTheme();
  const [showPassword, setShowPassword] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: '',
    password: '',
    registartionNo: ''
  });

  const { email, password, registartionNo } = user;

  const submitForm = (e) => {
    e.preventDefault();
    setIsSubmitting(true)
    const newUserdetails = {
      email: user.email,
      password: user.password,
      registartionNo: user.registartionNo
    };
    axios
      .post(`${process.env.REACT_APP_URL}/login`, newUserdetails)
      .then((res) => {
        if (res.data.status === 'failed') {
        setIsSubmitting(false)
          toast.error(`${res.data.message}`, {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored'
          });
        }
        if (res.data.status === 'Success') {
          setUser({
            email: '',
            password: '',
            registartionNo: ''
          });
          localStorage.setItem('token', res.data.token);
          navigate('/');
          setIsSubmitting(false)

        }
      })
      .catch((err) => {
        console.log(err);
        setIsSubmitting(false)

      });
  };

  const handleInput = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Grid container justifyContent="center">
        <Grid item xs={12}>
          {/* <Button
            fullWidth={true}
            sx={{
              fontSize: { md: '1rem', xs: '0.875rem' },
              fontWeight: 500,
              backgroundColor: theme.palette.grey[50],
              color: theme.palette.grey[600],
              textTransform: 'capitalize',
              '&:hover': {
                backgroundColor: theme.palette.grey[100]
              }
            }}
            size="large"
            variant="contained"
          >
            <img
              src={Google}
              alt="google"
              width="20px"
              style={{
                marginRight: '16px',
                '@media (maxWidth:899.95px)': {
                  marginRight: '8px'
                }
              }}
            />{' '}
            Sign in with Google
          </Button> */}
        </Grid>
      </Grid>

      {/* <Box alignItems="center" display="flex" mt={2}>
        <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
        <Typography color="textSecondary" variant="h5" sx={{ m: theme.spacing(2) }}>
          OR
        </Typography>
        <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
      </Box> */}

      <form>
        <TextField
          fullWidth
          label="Email Address"
          margin="normal"
          name="email"
          onChange={handleInput}
          type="email"
          value={user.email}
          variant="outlined"
        />
        <TextField
          fullWidth
          label="Registration Number"
          margin="normal"
          name="registartionNo"
          onChange={handleInput}
          type="number"
          value={user.registartionNo}
          variant="outlined"
        />
        <FormControl fullWidth sx={{ mt: theme.spacing(3), mb: theme.spacing(1) }}>
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            value={user.password}
            name="password"
            onChange={handleInput}
            label="Password"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                  size="large"
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        {/* <Grid container justifyContent="flex-end">
              <Grid item>
                <Typography variant="subtitle2" color="primary" sx={{ textDecoration: 'none' }}>
                  Forgot Password?
                </Typography>
              </Grid>
            </Grid> */}
        <Box mt={2}>
          <LoadingButton
            color="primary"
            loading={isSubmitting}
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            onClick={submitForm}
          >
            Log In
          </LoadingButton>
        </Box>
      </form>
    </>
  );
};

export default FirebaseLogin;
