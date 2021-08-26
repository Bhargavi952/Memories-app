import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    background: "#000",
  },
  heading: {
    // color: 'rgba(0,183,255, 1)',
    color: "#11bf71",
    textDecoration: 'none',
    [theme.breakpoints.down("xs")]: {
      fontSize:"19px"
    },
  },
  image: {
    marginLeft: '15px',
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '400px',
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '400px',
  
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
    color: "#fff",
    [theme.breakpoints.down("xs")]: {
      display: "none"
    },
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
    [theme.breakpoints.down("xs")]: {
      marginLeft:"50px"
    },
  },
  logout:{
    background: "#11bf71",
    [theme.breakpoints.down("xs")]: {
       marginRight:"220px",
       width:"40px",
       fontSize:"10px"
    },
  },
  signin_nav:{
    background: "#11bf71",

  }
}));