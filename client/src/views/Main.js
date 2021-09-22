import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Container, Button, Form } from "react-bootstrap";
import ChartPie from "../components/ChartPie";
import AccordionTable from "../components/AccordionTable";
import BarChart from "../components/BarChart";
import { Paper } from "@material-ui/core";
import axios from "axios";

function Main(props) {
  const [dailyWeight, setDailyWeight] = useState(0);
  const [userData, setUserData] = useState();
  const [weights, setWeights] = useState([]);
  const [foodData, setFoodData] = useState([]);
  const [loaded, setLoaded] = useState(false);

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
        background: "radial-gradient(circle, #e9e3e3 50%, #fcb045 100%)",
      }}
    >
      {loaded && (
        <Container>
          <Row className="py-5">
            <Col md={3}>
              <ChartPie
                foodData={foodData}
                weights={weights}
                initialWeight={userData.initialWeight}
                activityLevel={userData.activityLevel}
                age={userData.age}
                height={userData.height}
              />
            </Col>
            <Col md={2}></Col>
            <Col md={7} className="py-5">
              <Paper elevation={24}>
                <AccordionTable foodData={foodData} />
              </Paper>
              <Form
                onSubmit={submitHandler}
                className="d-flex"
                style={{ marginTop: "80px" }}
              >
                <Form.Control
                  type="text"
                  name="q"
                  onChange={(e) => setDailyWeight(e.target.value)}
                  placeholder="Input your daily weight"
                  className="mr-sm-2 ml-sm-5"
                ></Form.Control>
                <Button
                  type="submit"
                  variant="btn btn-dark"
                  style={{ marginLeft: "10px" }}
                >
                  Record Button
                </Button>
              </Form>
              <br />
              <br />
              <br />
              <BarChart weights={userData.dailyWeights} />
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
}

export default Main;
