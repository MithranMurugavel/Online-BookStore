import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import { useAuth } from '../context/AuthContext';

const Register = () => {
  const [message, setMessage] = useState("");
  const { registerUser } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    if (data.password !== data.confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }

    try {
      await registerUser(data.email, data.password);
      alert("User registered successfully");
    } catch (error) {
      setMessage("Please provide valid credentials");
      console.log(error);
    }
  };

  const handleGoogleSignIn = () => {
    console.log("Google sign-in clicked!");
  };

  return (
    <div className="min-h-[calc(100vh-130px)] flex justify-center items-center">
      <div className="w-100 max-w-sm mx-auto bg-white shadow-[0px_10px_15px_rgba(0,0,0,0.3)] rounded-[18px] px-8 pt-6 pb-8 mb-4">
        <h2 className="text-xl font-semibold mb-2">Register Here</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-500 text-md font-bold mb-2">
              Email:
            </label>
            <input
              {...register("email", { required: true })}
              type="email"
              id="email"
              placeholder="abc123@gmail.com"
              className="shadow border w-full rounded py-2 px-3 leading-tight focus:outline-none focus:shadow"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-500 text-md font-bold mb-2">
              Password:
            </label>
            <input
              {...register("password", { required: true })}
              type="password"
              id="password"
              placeholder="Enter Password"
              className="shadow border w-full rounded py-2 px-3 leading-tight focus:outline-none focus:shadow"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block text-gray-500 text-md font-bold mb-2">
              Confirm Password:
            </label>
            <input
              {...register("confirmPassword", { required: true })}
              type="password"
              id="confirmPassword"
              placeholder="Confirm Password"
              className="shadow border w-full rounded py-2 px-3 leading-tight focus:outline-none focus:shadow"
            />
          </div>

          {message && <p className="text-red-500 text-xs italic mb-3">{message}</p>}

          <div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-[10px] focus:outline-none transition-all duration-200"
            >
              Register
            </button>
          </div>
        </form>

        <p className="align-baseline font-medium mt-4 text-sm">
          Have an account?{" "}
          <Link to="/Login" className="text-blue-500 hover:text-blue-700">
            Click here to Login
          </Link>
        </p>

        <div className="mt-3">
          <button
            onClick={handleGoogleSignIn}
            className="w-full flex items-center justify-center bg-primary hover:bg-blue-700 rounded-[9px] text-black font-bold py-2 px-4 focus:outline-none"
          >
            <FcGoogle className="mr-2 w-6 h-6" />
            Sign in With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
