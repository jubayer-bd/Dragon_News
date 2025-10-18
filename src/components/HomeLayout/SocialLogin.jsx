import React from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  return (
    <div className="mb-5 ">
      <h2>Login With </h2>
      <div className="flex flex-col space-y-3 mt-5">
        <button className="btn btn-secondary  w-full btn-outline">
          <FcGoogle size={24} />
          Login with Google{" "}
        </button>
        <button className="btn btn-primary w-full btn-outline">
          <FaGithub size={24} />
          Login with Git Hub{" "}
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
