import React from 'react';
import './Footer.css';
import { Typography } from '@material-ui/core';

function Footer() {
  return <footer>
    <Typography variant="body2" color="textSecondary">
    &copy; 2021
    </Typography>
    <Typography variant="caption" color="textSecondary">
      Made by Pat Anderson for Prime Digital Academy
    </Typography>
    </footer>;
}

export default Footer;
