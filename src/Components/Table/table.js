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

export default function TableComponent({data}) {
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
            <TableCell align="center">Remover</TableCell>
            <TableCell align="center">Editar</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { data && data.map((item) => (
            <TableRow key={item.id}>
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
}
