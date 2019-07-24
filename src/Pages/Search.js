import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'fixed',
    top: 100,
    width: '100%',
    right: `calc((100% - 240px)/8)`,
    maxWidth: `calc((100% - 240px)/1.25)`,
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
}));

export default function Search({data}) {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell align="right">Código</TableCell>
            <TableCell align="right">Descrição</TableCell>
            <TableCell align="right">Marca</TableCell>
            <TableCell align="right">Quantidade</TableCell>
            <TableCell align="right">Preço</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item,index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                {item.name}
              </TableCell>
              <TableCell align="right">{item.code}</TableCell>
              <TableCell align="right">{item.description}</TableCell>
              <TableCell align="right">{item.branch}</TableCell>
              <TableCell align="right">{item.amount}</TableCell>
              <TableCell align="right">{item.costPrice}</TableCell>
              <TableCell align="right">
              <Button >
                Remove
                </Button>
              </TableCell>
              <TableCell align="right">
                <Button>
                    Edit
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}/*import React, { Component } from 'react'
import 'materialize-css/dist/css/materialize.min.css'

class SignIn extends Component{

    state={
        email:'',
        password:''
    };

    handleSubmit = (e) => {
        e.prevendDefault();

        console.log(this.state);
    }
    handleChange = (e) => {
        this.setState({
        [e.target.id]: e.target.value
        })
    }

    render(){
        return(
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Login</h5>
                        <div className="input-field">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" onChange={this.handleChange}/> 
                        </div>
                        <div className="input-field">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" onChange={this.handleChange}/> 
                        </div>
                        <div className="input-field">
                            <button className="btn pink lighten-1 z-depth-0">Login</button>
                        </div>
                </form>
            </div>
        );

    }
}

export default SignIn*/