import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { makeStyles } from "@mui/styles";

const AccordionTable = (props) => {
  const { foodData } = props;

  return (
    <>
      <Accordion style={{paddingLeft:"20px"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Breakfast</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Breakfast</TableCell>
                  <TableCell align="right">Calories</TableCell>
                  <TableCell align="right">Fat(g)</TableCell>
                  <TableCell align="right">Carbs(g)</TableCell>
                  <TableCell align="right">Protein(g)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {foodData && foodData[foodData.length - 1] &&
                  foodData[foodData.length - 1].breakfast.map((food, index) => {
                    return (
                      <TableRow key={"breakfast" + index}>
                        <TableCell>{food.name}</TableCell>
                        <TableCell>
                          {food.fat * 9 + (food.carb + food.protein) * 4}
                        </TableCell>
                        <TableCell>{food.fat}</TableCell>
                        <TableCell>{food.carb}</TableCell>
                        <TableCell>{food.protein}</TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{paddingLeft:"20px"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Lunch</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Lunch</TableCell>
                  <TableCell align="right">Calories</TableCell>
                  <TableCell align="right">Fat(g)</TableCell>
                  <TableCell align="right">Carbs(g)</TableCell>
                  <TableCell align="right">Protein(g)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {foodData && foodData[foodData.length - 1] &&
                  foodData[foodData.length - 1].lunch.map((food, index) => {
                    return (
                      <TableRow key={"lunch" + index}>
                        <TableCell>{food.name}</TableCell>
                        <TableCell>
                          {food.fat * 9 + (food.carb + food.protein) * 4}
                        </TableCell>
                        <TableCell>{food.fat}</TableCell>
                        <TableCell>{food.carb}</TableCell>
                        <TableCell>{food.protein}</TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{paddingLeft:"20px"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Dinner</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Lunch</TableCell>
                  <TableCell align="right">Calories</TableCell>
                  <TableCell align="right">Fat(g)</TableCell>
                  <TableCell align="right">Carbs(g)</TableCell>
                  <TableCell align="right">Protein(g)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {foodData && foodData[foodData.length - 1] &&
                  foodData[foodData.length - 1].dinner.map((food, index) => {
                    return (
                      <TableRow key={"dinner" + index}>
                        <TableCell>{food.name}</TableCell>
                        <TableCell>
                          {food.fat * 9 + (food.carb + food.protein) * 4}
                        </TableCell>
                        <TableCell>{food.fat}</TableCell>
                        <TableCell>{food.carb}</TableCell>
                        <TableCell>{food.protein}</TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default AccordionTable;
