import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Container, Button, Form } from "react-bootstrap";
import ChartPie from "../components/ChartPie";
import AccordionTable from "../components/AccordionTable";
import BarChart from "../components/BarChart";
import { Paper } from "@material-ui/core";
import axios from "axios";
import "../App.css"
import { KeyboardDatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';

function Main(props) {
  const [dailyWeight, setDailyWeight] = useState(0);
  const [userData, setUserData] = useState();
  const [weights, setWeights] = useState([]);
  const [foodData, setFoodData] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [selectedDate, handleDateChange] = useState(new Date());

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/users/getOne", {
        withCredentials: true,
      })
      .then((response) => {
        setUserData(response.data);
        setFoodData(response.data.foods);
        setWeights(response.data.weights);
        setLoaded(true);
      })
      .catch((error) => console.log("error", error.response));
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div
      style={{
        background: "radial-gradient(circle, #e9e3e3 50%, #e4d882 100%)",
      }}
    >
      <div id="MainbackImage" style={{}}>
        <h1 style={{
          fontSize: "4em",
          fontWeight: "bolder",
          padding: "100px 70px 0px 70px",
          width: "700px"
        }}>Fitness starts with rejuvenating yourself.</h1>
        <p style={{
          width: "600px",
          padding: "0px 70px",
        }}>Take control of your goals. Track calories, break down ingredients, and log activities with Rejuvenating You.</p>
        {loaded && (
          <Container style={{ marginTop: "20px" }}>
            <Row className="py-5">
              <Col md={4}>
                <ChartPie
                  foodData={foodData}
                  weights={weights}
                  initialWeight={userData.initialWeight}
                  activityLevel={userData.activityLevel}
                  age={userData.age}
                  height={userData.height}
                />
              </Col>
            </Row>
          </Container>
        )}
      </div>
      {loaded && (
        <Container style={{ marginTop: "-40px" }}>
          <Row className="py-5">
            <Col md={4}></Col>
            <Col md={8} className="py-5">
              <Paper elevation={24}>
                <AccordionTable foodData={foodData} />
              </Paper>
            </Col>
            <Form
              onSubmit={submitHandler}
              className="d-flex"
              style={{ marginTop: "80px" }}
            >
              <Col md={2} className="py-2" style={{ width: "440px" }}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    autoOk
                    variant="inline"
                    inputVariant="outlined"
                    label=""
                    format="MM/dd/yyyy"
                    value={selectedDate}
                    InputAdornmentProps={{ position: "start" }}
                    onChange={date => handleDateChange(date)}
                  />
                </MuiPickersUtilsProvider>
              </Col>

              <Form.Control
                type="text"
                name="q"
                onChange={(e) => setDailyWeight(e.target.value)}
                placeholder="Input your daily weight"
                className="sm-1"
              ></Form.Control>

              <Button
                type="submit"
                // variant="btn btn-dark"
                style={{ marginLeft: "10px", backgroundColor:"#a882e4" }}
              >
                Record Weight
              </Button>
            </Form>
            <br />
            <br />
            <br />
            <Col md={10}>
            <BarChart  weights={userData.dailyWeights} />
            </Col>

          </Row>
        </Container>
      )}
    </div>
  );
}

export default Main;
