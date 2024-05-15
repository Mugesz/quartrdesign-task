import React from "react";
import "./styles.css";
import dawn from "../asserts/Dawn.png";

const Success = () => {
  return (
    <div className="container mt-4 success-border">
      <div className="d-flex flex-wrap justify-content-center align-items-center mt-5 mb-5">
        <div className="success-1">
          <h1>
            <b>90%</b>
          </h1>
          <p className="success-para">Job Success Score on Upwork</p>
        </div>
        <div className="mx-4">
          <img src={dawn} alt="" />
        </div>
        <div className="success-1">
          <h1>
            <b>>25,000</b>
          </h1>
          <p className="success-para">Duplicates on Figma Community</p>
        </div>
        <div className="mx-4">
          <img src={dawn} alt="" />
        </div>
        <div className="success-1">
          <h1>
            <b>>2K</b>
          </h1>
          <p className="success-para-last">Finished Works</p>
        </div>
      </div>
    </div>
  );
};

export default Success;
