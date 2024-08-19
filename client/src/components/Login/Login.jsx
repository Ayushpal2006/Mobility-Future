import React from "react";
import { useForm } from "react-hook-form";
import "./Login.css";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors,isSubmitting },
  } = useForm();

  const onSubmit = async(data) => {
    const response = await fetch('http://localhost:4000/api/auth/login',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json' // Ensure the server knows you're sending JSON
      },
      body: JSON.stringify(data) // Replace with your actual data
    })
    const result = await response.text();

    console.log(data)
    console.log(result)
  }


  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login Here</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email address",
                },
              })}
            />
            {errors.email && <p className="error">{errors.email.message}</p>}
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
              })}
            />
            {errors.password && (
              <p className="error">{errors.password.message}</p>
            )}
          </div>
          <button disabled={isSubmitting} type="submit" className="btn">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
