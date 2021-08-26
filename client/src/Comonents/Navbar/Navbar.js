import React, { useEffect, useState } from 'react'
import { AppBar, Avatar, Toolbar, Typography , Button} from '@material-ui/core';
import logo from "../../Images/logo.svg"
import useStyles from './styles'
import {Link} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { useHistory ,useLocation } from 'react-router-dom';
    
const Navbar = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const history = useHistory()
    const location = useLocation()
    const [user , setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    // console.log(user)
    const logout = ()=>{
        dispatch({type:'LOGOUT'})
        history.push("/auth")
        setUser(null)
    }
    useEffect(()=>{
const token = user?.token
setUser(JSON.parse(localStorage.getItem('profile')))
    },[location])
    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
        <div className={classes.brandContainer}>
        <Typography component={Link} to='/' className={classes.heading} variant="h2" align="center">Memories</Typography>
        <img className={classes.image} src={logo} alt="icon" height="60" />
        </div>
        <Toolbar className={classes.toolbar}>
            {
                user?(
                    <div className={classes.profile}>
                        <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl} >
                            {
                                user.result.name.charAt(0)
                            }
                        </Avatar>
                        <Typography className={classes.userName} variant="h6"  >Hi, {user.result.name}</Typography>
                        <Button variant="contained" className={classes.logout} onClick={logout} >Logout</Button>
          </div>
        ) : (
          <Button component={Link} to="/auth" variant="contained" className={classes.signin_nav} >Sign In</Button>
        )}
        </Toolbar>
      </AppBar>

)
}

export default Navbar
 