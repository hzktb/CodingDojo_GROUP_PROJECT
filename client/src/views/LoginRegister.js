import React from "react";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";


function LoginRegister(props) {
  return <div style={{display:"flex", justifyContent: "space-between", backgroundColor:"black", height: "2000px"}}>
    <LoginForm />
    <RegisterForm setUser={props.setUser} />
  </div>;
}

export default LoginRegister;
