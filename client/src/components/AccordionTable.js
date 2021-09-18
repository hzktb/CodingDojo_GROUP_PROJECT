import React, { useState } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { makeStyles } from "@mui/styles";

const AccordionTable = () => {
    return (
        <>
        <Accordion>
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
                            <TableRow>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Typography>
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
                            <TableRow>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
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
                            <TableRow>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Typography>
            </AccordionDetails>
        </Accordion>
        </>
    )
}

export default AccordionTable