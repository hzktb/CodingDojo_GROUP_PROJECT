import React, { useState } from "react";
import FoodForm from "../../components/FoodForm";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography
} from "@mui/material/";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import './styles.css'
import { makeStyles } from "@mui/styles";
import DisplayFood from "../../components/DisplayFood";
import EditFood from "../../components/EditFood";


function AddFood() {
  const [dummy, setDummy] = useState(false)
  const [isEdit, setIsEdit] = useState(false)
  const [editFood, setEditFood] = useState({})

  const useStyles = makeStyles({
    root: {
      width: "50%",
      margin: "0px auto"
    },
  });
  const classes = useStyles();

  return (
    <div id="backImage" style={{ height: "100vh" }}>
      <div className={classes.root} style={{ paddingTop: "40px" }} >
        <Accordion classes={classes.root} >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Breakfast</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <FoodForm setDummy={setDummy} dummy={dummy} />
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Lunch</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <FoodForm setDummy={setDummy} dummy={dummy} />
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography>Dinner</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <FoodForm setDummy={setDummy} dummy={dummy} />
          </AccordionDetails>
        </Accordion>

        <DisplayFood setDummy={setDummy} dummy={dummy} setIsEdit={setIsEdit} setEditFood={setEditFood} />
        {isEdit ? <EditFood
          open={isEdit}
          setIsEdit={setIsEdit}
          existingFood={editFood}
        /> : false
        }
      </div>
    </div>
  )

}

export default AddFood;
