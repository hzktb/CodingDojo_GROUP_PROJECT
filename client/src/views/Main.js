import React, { useState } from "react";
import {Link} from "react-router-dom"
import { Row, Col, Container, Button, Form} from 'react-bootstrap'
import ChartPie from '../components/ChartPie'
import AccordionTable from '../components/AccordionTable'
import BarChart from '../components/BarChart'
import { Paper } from '@material-ui/core'



function Main()  {
  const [weight, setWeight] = useState(0)

  const submitHandler = (e) => {
    e.preventDefault()
  }
  return <div  style={{background: 'radial-gradient(circle, #e9e3e3 50%, #fcb045 100%)'}}>
    <Container>
    <Row className="py-5">
      <Col md={3}>
        <ChartPie />
      </Col>
      <Col md={2}></Col>
      <Col md={7} className="py-5">
        <Paper elevation={24}>
          <AccordionTable />
        </Paper>
          <br/>
          <Button className="btn btn-primary"><Link to="/addFood" style={{color: "white"}} > Add Food </Link></Button>
          <br/>
          <br/>
          <Form onSubmit={submitHandler} className="d-flex" style={{marginTop: "80px"}}>
            <Form.Control 
            type="text" 
            name="q" 
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Input your daily weight"
            className="mr-sm-2 ml-sm-5"
            ></Form.Control>
            <Button type="submit" variant='btn btn-dark' style={{marginLeft: "10px"}}>Record Butt</Button>
        </Form>
        <br/>
        <br/>
        <br/>
        <BarChart />
      </Col>
    </Row>
    </Container>
  </div>;
}

export default Main;