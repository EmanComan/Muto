import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/use-auth";
import { useMounted } from "../../hooks/use-mounted";

export const RegisterForm = (props) => {
const [email, setEmail] = useState('')
const [username, setUsername] = useState('')
const [password, setPassword] = useState('')
  const isMounted = useMounted()
  const navigate = useNavigate()
  const { register } = useAuth()

  const handleSubmit =  async (event) => {
    event.preventDefault()
    const values = {
      name: username,
      email: email,
      password: password
    }
    try {
      await register(values.email, values.name, values.password)
      console.log('registerUser', values)
      if(isMounted()){
        navigate('/auth/login')
      }
    } catch (error) {
      console.error(error)
    }
    
  }

  return (
    <form className="pt-3" onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="text"
          className="form-control form-control-lg"
          placeholder="Username"
          name="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </div>
      <div className="form-group">
        <input
          type="email"
          className="form-control form-control-lg"
          placeholder="Email"
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
      <div className="mb-4">
        <div className="form-check">
          <label className="form-check-label text-muted">
            <input type="checkbox" className="form-check-input" /> I agree to all
            Terms & Conditions{" "}
          </label>
        </div>
      </div>
      <div className="mt-3">
        <button
          className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
          type="submit"
        >
          SIGN UP
        </button>
      </div>
      <div className="text-center mt-4 font-weight-light">
        {" "}
        Already have an account?{" "}
        <a href="/auth/login" className="text-primary">
          Login
        </a>
      </div>
    </form>
  );
};
