import React from "react";
import sheild from "../asserts/Shield.png"

const Sheild = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="top p-0 d-flex flex-column justify-content-center align-items-center text-center">
            <h1 className="text-light">Kaleb Lechtenberg</h1>
            <p className="text-light shield-para">
              "Working with this freelancer has been great. His attention to detail
              is unparalleled and finished all work ahead of schedule. Will gladly
              send more work and I do not hesitate to recommend him to you on your
              project also."
            </p>
            <img src={sheild} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sheild;
