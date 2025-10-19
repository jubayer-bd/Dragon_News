import React from "react";
import { Link } from "react-router";

const Register = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h1 className="font-bold pt-8 text-center text-2xl">
          Register your account
        </h1>
        <div className="card-body">
          <fieldset className="fieldset">
            {/* name */}
            <label className="label">Your Name</label>
            <input
              type="text"
              className="input"
              placeholder="Enter your name"
            />
            {/* photo url */}
            <label className="label">Photo URL</label>
            <input
              type="text"
              className="input"
              placeholder="Enter your photo url"
            />
            {/* email  */}
            <label className="label">Email</label>
            <input
              type="email"
              className="input"
              placeholder="Enter your email address"
            />
            {/* password */}
            <label className="label">Password</label>
            <input
              type="password"
              className="input"
              placeholder="Enter your password"
            />

            <p className="text-center font-semibold mt-3">
              Already Have An Account ?{" "}
              <Link className="text-secondary font-bold" to={"/auth/login"}>
                Login
              </Link>
            </p>
            <button className="btn btn-neutral mt-4">Register</button>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Register;
