import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import {useSelector, useDispatch} from 'react-redux';
//mui drawer for making the nav a popoutmenu
import { 
  Drawer as MUIDrawer, 
  ListItem,
  List, 
  ListItemIcon, 
  ListItemText 
} from '@material-ui/core';
//styling
import { makeStyles } from '@material-ui/core/styles';
const  useStyles = makeStyles({
  drawer: {
    width: '190px'
  }
})
//icons
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';

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

  const handleNavOpen = () => {
    setNavOpen( true );
  }

  const handleNavClose = () => {
    setNavOpen( false );
  }

  //bring in styles for classNames
  const classes = useStyles();
  //setup variables for MUI drawer
  const navList = [ {
    text: loginLinkData.text,
    icon: <InboxIcon />,
    onClick: ()=> history.push(loginLinkData.path)
  }, {
    text: 'Create Request',
    icon: <MailIcon />,
    onClick: ()=> history.push('/create')
  }, {
    text: 'About/Profile',
    icon: <MailIcon />,
    onClick: ()=> history.push('/about')
  }, {
    text: 'Logout',
    icon: <MailIcon />,
    onClick: ()=> dispatch({ type: 'LOGOUT' })
  } ]



  return (
    <MUIDrawer className={classes.drawer}>
      <List>
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
    // <div className="nav">
    //   <Link to="/home">
    //     <h2 className="nav-title">Prime Solo Project</h2>
    //   </Link>
    //   <div>
    //     <Link className="navLink" to={loginLinkData.path}>
    //       {loginLinkData.text}
    //     </Link>

    //     {user.id && (
    //       <>
    //         <Link className="navLink" to="/create">
    //           Create Request
    //         </Link>
    //         <LogOutButton className="navLink" />
    //       </>
    //     )}

    //     <Link className="navLink" to="/about">
    //       About
    //     </Link>
    //   </div>
    // </div>
  );
}

export default Nav;
