import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper';
import FirebaseService from '../Components/services/firebaseServices'
import privateUrls from '../Components/utils/urlUtils'
import { Link } from 'react-router-dom'

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

  const remove = (id) => {
    FirebaseService.remove(id, 'leituras');
};

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
              <Button onClick={() => remove(item.key)}>Remove</Button>
              </TableCell>
              <TableCell align="right">
                <Button component={props => 
                    <Link to={privateUrls.edit.pathWithouParam + item.key}    
                    {...props}/>}>
                    Edit
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}