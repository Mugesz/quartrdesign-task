import React from "react";
import Logo from "../asserts/Logo.png";
import long from "../asserts/Escultures.png";
import Line from "../asserts/img3.png";
import "./styles.css";

function Footer() {
  return (
    <footer id="footer" className="bg-footer text-white ">
      <div className="container custom-container">
         
        <div className="d-flex justify-content-center align-items-center custom-main-footer">
          <div className="col-md-6 d-flex j pt-5 mt-5">
            <img src={Logo} alt="" className="img-fluid logo-2" />
            <div className="mt-3 footerflex">
              <p>
                <a href="/" className="btn btn-footer text-white">
                  Home
                </a>
              </p>
              <p>
                <a href="/" className=" btn btn-footer text-white">
                  About
                </a>
              </p>
              <p>
                <a href="/" className="btn btn-footer text-white">
                  Blogs
                </a>
              </p>
              <p>
                <a href="/contact-us" className="btn btn-footer text-white">
                  Contactus
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
