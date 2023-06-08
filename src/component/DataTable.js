import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

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
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function DataTables({ todo,setTodo,setOpen,setData }) {
  const deleteByValue = value => {
    setTodo(previousEmployeeData => previousEmployeeData.filter((data)=> data.id != value ))
  }
  return (
    <>
      {todo?.length?  (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="Data table">
            <TableHead>
              <TableRow>
                <StyledTableCell>S. No</StyledTableCell>
                <StyledTableCell>Name</StyledTableCell>
                <StyledTableCell>Email</StyledTableCell>
                <StyledTableCell>Age</StyledTableCell>
                <StyledTableCell>Mobile</StyledTableCell>
                <StyledTableCell>Address</StyledTableCell>
                <StyledTableCell>Action</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {todo?.map((row, index) => (
                <StyledTableRow key={index}>
                  <StyledTableCell>{row.id}</StyledTableCell>
                  <StyledTableCell>
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell>{row.email}</StyledTableCell>
                  <StyledTableCell>{row.age}</StyledTableCell>
                  <StyledTableCell>{row.mobile}</StyledTableCell>
                  <StyledTableCell>{row.address}</StyledTableCell>
                  <StyledTableCell><EditIcon sx={{color:"green",cursor:'pointer'}} onClick={()=>{setOpen(true);
                  setData(row)
                }} />  <DeleteIcon sx={{color:"red",cursor:'pointer'}} onClick={()=>deleteByValue(row.id)} /></StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )
    :<h2 style={{textAlign:'center'}}>You dont have any todo please add</h2>}
    </>
  );
}
