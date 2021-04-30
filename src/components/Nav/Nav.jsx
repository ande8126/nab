import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Nav.css';
import {useSelector, useDispatch} from 'react-redux';
//mui drawer for making the nav a popoutmenu
import { 
  AppBar,
  Drawer as MUIDrawer,
  IconButton, 
  ListItem,
  List, 
  ListItemIcon, 
  ListItemText,
  Toolbar,
} from '@material-ui/core';
//styling
import { makeStyles, useTheme } from '@material-ui/core/styles';
const  useStyles = makeStyles( ( theme )=>({
  navMain: {
    padding: '0 8px',
  },
  drawer: {
    width: '190px',
  },
  drawerPaper: {
    backgroundColor: '#cbc3e3'
  },
  logo: {
    width: '26%',
    maxWidth: '75px'
  }
}))
//icons
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import HomeIcon from '@material-ui/icons/Home';
import AddIcon from '@material-ui/icons/Add';
import PersonIcon from '@material-ui/icons/Person';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

function Nav() {
  const user = useSelector((store) => store.user);
  //needed for history.push
  const history = useHistory();
  //needed for dispatch
  const dispatch = useDispatch();
  //REWRITE THIS W/CONDITIONAL RENDER SO NO NAV SHOWS ON LOGIN
  let [ loginLinkData, setLoginLinkData ] = useState({
    path: '/login',
    text: 'Login / Register',
  })
  if(user.id != null) {
    loginLinkData.path = '/home';
    loginLinkData.text = 'Home';
  }
  //local state for menu icon toggle
  const [ navOpen, setNavOpen ] = useState( false );

  //functions to handle nav toggle
  const handleNavOpen = () => {
    setNavOpen( true );
  }

  const handleNavClose = () => {
    setNavOpen( false );
  }

  //bring in styling from MUI
  const classes = useStyles();
  const theme = useTheme(); 

  //setup variables for MUI drawer
  const navList = [ {
    text: loginLinkData.text,
    icon: <HomeIcon />,
    onClick: ()=>{handleNavClose(); history.push(loginLinkData.path)}
  }, {
    text: 'Create Request',
    icon: <AddIcon />,
    onClick: ()=> {handleNavClose(); history.push('/create')}
  }, {
    text: 'Profile',
    icon: <PersonIcon />,
    onClick: ()=> {handleNavClose(); history.push('/about')}
  }, {
    text: 'Logout',
    icon: <ExitToAppIcon />,
    onClick: ()=> {handleNavClose(); dispatch({ type: 'LOGOUT' })}
  } ]



  return (
    <>
      <AppBar
      position="fixed" className={classes.navMain}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open-drawer"
            onClick={handleNavOpen}
            edge="start"
          >
            <MenuIcon />
          </IconButton>
          <img className={classes.logo} src="https://i.imgur.com/1FFPq48.png" />
        </Toolbar>
      </AppBar> 
      <MUIDrawer 
        className={classes.drawer}
        anchor="left"
        open={navOpen}
        classes={{ paper: classes.drawerPaper }}
      >
        <IconButton onClick={handleNavClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon /> }
        </IconButton>  
        <List className={classes.drawerList}>
          {navList.map((item, index) =>{
            const { text, icon, onClick } = item
            return(
            <ListItem button key={text} onClick={onClick}>
              {icon && <ListItemIcon>{icon}</ListItemIcon>}
              {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
              <ListItemText primary={text} />
            </ListItem>
            )} 
          )}
        </List>
      </MUIDrawer>
      <div className={classes.appBarSpacer} />
    </>
  );
}

export default Nav;
