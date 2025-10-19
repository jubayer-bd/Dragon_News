import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h2 className="font-bold mb-3">Find Us ON </h2>
      <div>
        <div className="join join-vertical w-full">
          <button className="btn btn-soft btn-primary  justify-start join-item">
            <FaFacebook size={24} /> FaceBook
          </button>
          <button className="btn btn-soft btn-info  justify-start join-item">
            <FaTwitter size={24} /> Twitter
          </button>
          <button className="btn btn-soft btn-secondary justify-start join-item">
            <FaInstagram size={24} /> Instagram
          </button>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
