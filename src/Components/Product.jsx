import React from "react";
import Blog from "../asserts/img1.jpeg";
import Star from "../asserts/star.jpg";
import insta from "../asserts/instagram.png";
import figma from "../asserts/Figma.png";
import medium from "../asserts/Medium Logo.png";
import linkedin from "../asserts/linkedin.png";
import telegram from "../asserts/telegram.png";
import twitter from "../asserts/twitter.png";
import down from "../asserts/arrow-down.png";
import "./styles.css";

const Product = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-5 d-flex justify-content-center align-items-center">
          <div className="header-top2 text-center">
            <h1 className="product-h1 m-0">PRODUCT DESIGNER</h1>
            <h1 className="product-header-b1 m-0">CRISTIAN MUÑOZ</h1>
            <div className="d-flex justify-content-between m-3">
              <img src={insta} alt="" className="img-fluid mx-2" />
              <img src={figma} alt="" className="img-fluid mx-2" />
              <img src={linkedin} alt="" className="linkedin-img mx-2" />
              <img src={twitter} alt="" className="img-fluid mx-2" />
              <img src={telegram} alt="" className="img-fluid mx-2" />
              <img src={medium} alt="" className="img-fluid mx-2" />
            </div>
            <div className="bg-dark text-white mt-3">
              <p className="m-0">
                Download Curriculum Vitae{" "}
                <span>
                  <img src={down} alt="" />
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-2 mt-5 d-none d-lg-flex justify-content-center">
          <img
            className="img-fluid rounded-2"
            src={Star}
            alt=""
            style={{ maxHeight: "400px", width: "auto" }}
          />
        </div>
        <div className="col-lg-5 mt-5 d-flex justify-content-center align-items-center">
          <img
            className="img-fluid rounded-2"
            src={Blog}
            alt=""
            style={{ maxHeight: "400px", width: "auto" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Product;
