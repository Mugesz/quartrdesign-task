import React from "react";
import baby from "../asserts/baby.png";
import boy from "../asserts/boy.png";
import girl from "../asserts/girl.png";
import "./styles.css";

const Aboutme = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center">About me</h1>
      <div className="row">
        <div className="col-lg-6 d-flex align-items-center">
          <p className="text-center aboutme-para">
            I am a <span className="product-designer">Product Designer</span> and Frontend Developer. I fully understand the process of design and development of a digital product. My job is to make a product usable and visually appealing. Through the <span className="product-designer">Design Thinking</span> methodology, I manage to create products that are endearing to users.
          </p>
        </div>
        <div className="col-lg-6 d-flex justify-content-center align-items-center">
          <img src={baby} alt="" className="img-fluid" />
        </div>
        <div className="col-lg-6 d-flex justify-content-center align-items-center">
          <img src={girl} alt="" className="img-fluid" />
        </div>
        <div className="col-lg-6 d-flex align-items-center">
          <p className="text-center aboutme-para">
            I am passionate about <span className="product-designer">never stop learning</span>. I am constantly training and learning about new and changing <span className="product-designer">technology</span> trends. That way, I bring an updated opinion of the Tech industry.
          </p>
        </div>
        <div className="col-lg-6 d-flex align-items-center">
          <p className="text-center aboutme-para">
            My full name is <span className="product-designer">Cristian David Muñoz Camayo</span> and more than what I said before, I am a dreamer. I am proudly <span className="co">Co</span><span className="lomb">lomb</span><span className="ian">ian</span> and in me you will find a human being with the desire to do his best to help others.
          </p>
        </div>
        <div className="col-lg-6 d-flex justify-content-center align-items-center">
          <img src={boy} alt="" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
