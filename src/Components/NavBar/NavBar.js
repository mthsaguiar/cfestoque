import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import Icon from '@material-ui/core/Icon'
import ListItemText from '@material-ui/core/ListItemText'
import addProdButton from '../assets/baseline-add_box-24px.svg'
import inOutButton from '../assets/baseline-swap_vert-24px.svg'
import sideBar from '../images/sideBar.jpg'
import { Link } from 'react-router-dom'

const navBarWidth = 240;

const styles = makeStyles (theme =>({
staticBox: {
    width: navBarWidth,
    height: 64,
},
sideBar: {
width: '100%',
maxWidth: navBarWidth,
height: '100vh'
},
menuList: {
width: '100%',
maxWidth: navBarWidth,
justifyContent: 'center',
alignItems: 'flex-end',
},
icon: {
    margin: theme.spacing(2),
},
}));

export default function navBar() {
    
const ImageSideBar = sideBar;
const classes = styles();

return(
<navBar >
<div className={classes.sideBar} style={{backgroundImage: `url(${ImageSideBar})` }}>
    <div className={classes.staticBox}/>
        <Divider />

            <div className={classes.menuList} >
                <List component="nav" aria-label="Menu de navegação">
                <Link to ="/">
                    <ListItem button>
                        <ListItemIcon>
                            <Icon className={classes.icon}>
                                <img src={addProdButton} alt="addProduto"/>
                            </Icon>
                        </ListItemIcon>
                        <ListItemText primary="PRODUTO"/>
                    </ListItem>
                </Link>
                    <ListItem button>
                        <ListItemIcon>
                            <Icon className={classes.icon}>
                                <img src={inOutButton} alt="inOutButton"/>
                            </Icon>
                        </ListItemIcon>
                        <ListItemText primary="MOVIMENTAÇÃO"/>
                    </ListItem>
                </List>
            </div>
</div>
</navBar>
);
}