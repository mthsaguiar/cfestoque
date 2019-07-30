import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import CssBaseline from '@material-ui/core/CssBaseline'
import { makeStyles } from '@material-ui/core/styles'
import ProfileMenu from '../Profile/profile'


const barWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  appBar:{
    width: `calc(100% - ${barWidth}px)`,
    marginLeft: barWidth,
    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function HeaderBar() {

  const classes = useStyles();

    return(

    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
            <Typography variant="h7" className={classes.title}>
              Estoque Conquista Frio
            </Typography>
          <ProfileMenu/>
        </Toolbar>
      </AppBar>
  </div>
  );
}

