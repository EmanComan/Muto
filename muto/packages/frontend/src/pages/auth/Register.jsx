import React from "react";
import { RegisterForm } from "../../components/authentication/RegisterForm";

export default function Register() {
  return (
    <>
      <h4>New here?</h4>
      <h6 className="font-weight-light">
        Signing up is easy. It only takes a few steps
      </h6>
      <RegisterForm />
    </>
  );
}
