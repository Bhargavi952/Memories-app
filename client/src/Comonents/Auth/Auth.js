import React, { useState } from "react";
import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
} from "@material-ui/core";
import useStyles from "./styles";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { GoogleLogin } from 'react-google-login';
import Input from "./Input";
import Icon from './icon';
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { signin , signup } from "../../Redux/actions/auth";

const init = {
  firstName:"",
  lastName:"",
  email:"",
  password:"",
  confirmPassword:""

}

const Auth = () => {
  const classes = useStyles();
  const [isSignup ,setIsSignup] = useState(false)
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState(init)
  const dispatch = useDispatch()
  const history = useHistory()
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
    if(isSignup){
      dispatch(signup(formData,history))
    }
    else{
      dispatch(signin(formData,history))

    }
  };
  const handleChange = (e) => {
    setFormData({...formData , [e.target.name]:e.target.value})
  };
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const switchMode = () => {
    setIsSignup(!isSignup)
    setShowPassword(false)
  };
  const googleSuccess = async (res)=>{
    //   console.log(res)
    const result = res?.profileObj; // it will not throw error
    const token = res?.tokenId;
    try{
        dispatch({type:'AUTH',data:{result , token}})
        history.push('/')
    }
    catch(err){
        console.log(err)
    }

  }                                
  const googleFailure =()=>{
    console.log("Google Sign In was unsuccessful. Try again later")
  }
  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon  />
        </Avatar>
        <Typography component="h1" variant="h5">
          {isSignup ? "Sign up" : "Sign in"}
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignup && (
              <>
                <Input
                  name="firstName"
                  label="First Name"
                  handleChange={handleChange}
                  autoFocus
                  half
                />
                <Input
                  name="lastName"
                  label="Last Name"
                  handleChange={handleChange}
                  half
                />
              </>
            )}
            <Input
              name="email"
              label="Email Address"
              handleChange={handleChange}
              type="email"
            />
            <Input
              name="password"
              label="Password"
              handleChange={handleChange}
              type={showPassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
            />
            {isSignup && (
              <Input
                name="confirmPassword"
                label="Repeat Password"
                handleChange={handleChange}
                type="password"
              />
            )}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className={classes.submit}
          >
            {isSignup ? "Sign Up" : "Sign In"}
          </Button>
          <GoogleLogin
          clientId="268954389453-pqntc78f8sphdjmcnvc12936igl6mptm.apps.googleusercontent.com"
          render={(renderProps) => (
            <Button className={classes.googleButton}  fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon />} variant="contained">
              Google Sign In
            </Button>
          )}
          onSuccess={googleSuccess}
          onFailure={googleFailure}
          cookiePolicy="single_host_origin"
          />
          <Grid container justify="flex-end">
            <Grid item>
              <Button onClick={switchMode}>
                { isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign Up" }
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
