import "./App.css";
import { Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './utils/Navbar/Navbar';
import Main from "./views/Main";
import AddFood from "./views/AddFood";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import LoginRegister from "./views/LoginRegister";

function App() {
  return <>
    <Navbar  isLoggedIn= {false} user="ss"/>

    <Switch>
      <Route exact path="/" component={() => <LoginRegister />} ></Route>
      <Route exact path="/main" component={() => <Main />} ></Route>
      <Route exact path="/addFood" component={() => <AddFood />} ></Route>
    </Switch>
    
  </>;
}

export default App;
