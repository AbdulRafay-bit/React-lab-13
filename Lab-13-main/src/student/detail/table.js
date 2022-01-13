import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


export default function CustomizedTables({name="Abdul Rafay", rollNo="2019-SE-073", description=" i am a Student"}) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700, marginTop:8 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="left">Roll No</StyledTableCell>
            <StyledTableCell align="left">Description</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>

            <StyledTableRow key={name}>
              <StyledTableCell component="th" scope="row">
                {name}
              </StyledTableCell>
              <StyledTableCell align="left">{rollNo}</StyledTableCell>
              <StyledTableCell align="left">{description}</StyledTableCell>

            </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
