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
import homeButton from '../assets/sharp-apps-24px.svg'
import buscaProduto from '../assets/baseline-search-24px.svg'
import { Link } from 'react-router-dom'
import './NavBar.css'

const navBarWidth = 240;

const styles = makeStyles (theme =>({
staticBox: {
    width: navBarWidth,
    height: 64,
},
sideBar: {
position:'absolute',
background: 'linear-gradient(45deg, #21CBF3 90%,#2196F3 30%)',
width: '100%',
maxWidth: navBarWidth,
height: '100vh',
boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
},
menuList: {
width: '100%',
maxWidth: navBarWidth,
justifyContent: 'center',
alignItems: 'flex-end',
},
textButton:{
color: 'black',
},
svgicon:{
color: theme.palette.secondary.main,
},
icon: {
    fill: '#fff',
    margin: theme.spacing(2),
},
}));

export default function NavBar() {
const classes = styles();

return(
<div className={classes.sideBar}>
    <div className={classes.staticBox}/>
        <Divider className="dividerStyle"/>
            <div className={classes.menuList} >
                <List component="nav" aria-label="Menu de navegação">
                <ListItem button component={Link} to="">
                        <ListItemIcon className={classes.svgicon}>
                            <Icon className={classes.icon}>
                                <img  src={homeButton} alt="homeButton"/>
                            </Icon>
                        </ListItemIcon>
                        <ListItemText className={classes.textButton} secondary="Início"/>
                    </ListItem>
                    <ListItem button component={Link} to="/search">
                        <ListItemIcon>
                            <Icon className={classes.icon}>
                                <img src={buscaProduto} alt="buscaProduto"/>
                            </Icon>
                        </ListItemIcon>
                        <ListItemText className={classes.textButton} secondary="Estoque"/>
                    </ListItem>
                    <ListItem button component={Link} to="/newproduct">
                        <ListItemIcon>
                            <Icon className={classes.icon}>
                                <img src={addProdButton} alt="addProduto"/>
                            </Icon>
                        </ListItemIcon>
                        <ListItemText className={classes.textButton} secondary="Novo Produto"/>
                    </ListItem>
                    <ListItem button component={Link} to="/move">
                        <ListItemIcon>
                            <Icon className={classes.icon}>
                                <img src={inOutButton} alt="inOutButton"/>
                            </Icon>
                        </ListItemIcon>
                        <ListItemText className={classes.textButton} secondary="Movimentação"/>
                    </ListItem>
                </List>
            </div>
</div>
);
}