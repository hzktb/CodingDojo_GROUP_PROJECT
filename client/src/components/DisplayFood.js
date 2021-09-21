import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import axios from 'axios';
import CreateIcon from '@material-ui/icons/Create';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import "../views/AddFood/styles.css"

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

export default function DisplayFood(props) {
  const userId = localStorage.getItem("userId")
  const [displayFoodList, setFoodList] = useState([])
  const { dummy } = props

  useEffect(() => {
    axios.get('http://localhost:8000/api/foods/findAll', {
      withCredentials: true
    })
      .then(response => {
        setFoodList(response.data)
        console.log("data", response.data);
      })
      .catch(error => console.log(error))
  }, [userId, dummy])

  const handleDelete = (food) => {
    axios
      .delete("http://localhost:8000/api/foods/delete/" + food._id, {
        withCredentials: true,
      })
      .then((response) => {
        console.log("delete", response.data);
        props.setDummy(!dummy);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const handleEdit = (food) => {
    props.setIsEdit(true)
    props.setEditFood(food)
  }

  return (
    <TableContainer component={Paper} style={{ marginTop: "50px", marginBottom:"50px"}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Food Name</StyledTableCell>
            <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Edit</StyledTableCell>
            <StyledTableCell align="right">Delete</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {displayFoodList.length <= 0 ?
          <TableCell colSpan={6} style={{textAlign:"center", fontSize:"1rem"}}> You Have not added meal yet</TableCell>
          :
          displayFoodList.map((food, index) => (
            <StyledTableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <StyledTableCell component="th" scope="row">
                {food.name}
              </StyledTableCell>
              <StyledTableCell align="right">{food.fat}</StyledTableCell>
              <StyledTableCell align="right">{food.protein}</StyledTableCell>
              <StyledTableCell align="right">{food.carb}</StyledTableCell>
              <StyledTableCell align="right">
                <CreateIcon className="icons" style={{ marginLeft: "20px" }} onClick={() => handleEdit(food)} />
              </StyledTableCell>
              <StyledTableCell align="right">
                <DeleteForeverIcon className="icons" onClick={() => handleDelete(food)} />
              </StyledTableCell>
            </StyledTableRow>
          ))
        }
          
        </TableBody>
      </Table>
    </TableContainer>
  );
}
