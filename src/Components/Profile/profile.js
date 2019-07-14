import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Icon from '@material-ui/core/Icon'
import ProfileIcon from '../assets/baseline-reorder-24px.svg'
import { makeStyles } from '@material-ui/core/styles'

const styles = makeStyles (theme =>({
    icon: {
        margin: theme.spacing(2),
    },

}));


export default function ProfileMenu() {

    const classes = styles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div>
      <Button aria-controls="profile-menu" aria-haspopup="true" onClick={handleClick}>
        <Icon className={classes.icon}>
            <img src={ProfileIcon} alt="homeButton"/>
        </Icon>
      </Button>
      <Menu
        id="profile-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
}