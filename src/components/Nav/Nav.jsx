import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import {useSelector} from 'react-redux';
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
    width: '160px'
  }
})
//icons
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

function Nav() {
  const user = useSelector((store) => store.user);
  //bring in styles for classNames
  const classes = useStyles();
  //setup variables for MUI drawer
  const navList = [ {
    text: 'Inbox',
    icon: <InboxIcon />
  }, {
    text: 'Starred'
  }, {
    text: 'Send email',
    icon: <MailIcon />
  }, {
    text: 'Drafts'
  } ]

  let loginLinkData = {
    path: '/login',
    text: 'Login / Register',
  };

  if (user.id != null) {
    loginLinkData.path = '/home';
    loginLinkData.text = 'Home';
  }

  return (
    <MUIDrawer open variant="permanent" className={classes.drawer}>
      <List>
        {navList.map((item, index) =>{
          const { text, icon } = item
          return(
          <ListItem button key={text}>
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
