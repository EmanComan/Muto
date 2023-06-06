import React, { useState } from "react";
import { useAuth } from "../../hooks/use-auth";
import { useMounted } from "../../hooks/use-mounted";

export const LoginForm = () => {
  const isMounted = useMounted();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const values = {
        email: email,
        password: password,
      };
      if(isMounted()) {
        await login(values.email, values.password);
      }
    } catch (error) {
      console.log(error)
    }
    
  };
  return (
    <form className="pt-3" onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="email"
          className="form-control form-control-lg"
          placeholder="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          className="form-control form-control-lg"
          placeholder="Password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <div className="mt-3">
        <button
          type="submit"
          className="btn btn-block btn-success btn-lg font-weight-medium auth-form-btn"
        >
          SIGN IN
        </button>
      </div>
      <div className="my-2 d-flex justify-content-between align-items-center">
        <div className="form-check">
          <label className="form-check-label text-muted">
            <input type="checkbox" className="form-check-input" />
            Keep me signed in{" "}
          </label>
        </div>
        <a href="#/" className="auth-link text-black">
          Forgot password?
        </a>
      </div>
      <div className="text-center mt-4 font-weight-light">
        {" "}
        Don't have an account?{" "}
        <a href="/auth/register" className="text-primary">
          Create
        </a>
      </div>
    </form>
  );
};
