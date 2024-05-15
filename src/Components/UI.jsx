import React from "react";
import img2 from "../asserts/img2.jpeg";

const UI = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        {[...Array(8)].map((_, index) => (
          <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={index}>
            <div className="card success-border" style={{ width: "100%" }}>
              <div className="p-2">
                <img
                  className="card-img-top"
                  src={img2}
                  alt=""
                  height="250px"
                />
              </div>

              <div className="card-body">
                <h5 className="card-title">MI Portal U</h5>
                <p className="card-text d-flex justify-content-between">
                  <button className="btn btn-sm bg-btn">ux design</button>{" "}
                  <button className="btn btn-sm bg-btn">univesity</button>{" "}
                  <button className="btn btn-sm bg-btn">javascript</button>
                </p>
                <div className="text-center">
                  <button className="btn btn-dark" onClick={() => window.location.href = 'https://example.com'}>
                    Go somewhere
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UI;
