import React from "react";
import Logo from "../asserts/Logo.png";
import long from "../asserts/Escultures.png";
import Line from "../asserts/img3.png";
import "./styles.css";

function Footer() {
  return (
    <footer id="footer" className="bg-footer text-white ">
      <div className="container custom-container">
        <div className="bg-footer-voilet">
          <div className="long ">
            <img src={long} alt="Your Logo" className="custom-image" />
            <div>
              <p className="text-center">Thanks for visiting my website</p>
              <p className="text-center">
                If you have any questions, you can write to me on any of my
                social networks. I'm sure I'll answer you.
              </p>{" "}
            </div>
            <img src={Line} alt="" height="50px" className="line-img" />
          </div>
        </div>

        <div className="d-flex justify-content-between align-items-center custom-main-footer">
          <div className="col-md-6 d-flex align-items-center pt-5 mt-5">
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
