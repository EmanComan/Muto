import React from "react";
import { LoginForm } from "../../components/authentication/LoginForm";

export default function Login() {
  return (
    <>
      <h4>Hello! let's get started</h4>
      <h6 className="font-weight-light">Sign in to continue.</h6>
      <LoginForm />
    </>
  );
  
}