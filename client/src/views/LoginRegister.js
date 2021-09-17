import React from "react";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";


function LoginRegister() {
  return <div style={{display:"flex", justifyContent: "space-between", backgroundColor:"black"}}>
    <LoginForm />
    <RegisterForm />
  </div>;
}

export default LoginRegister;
