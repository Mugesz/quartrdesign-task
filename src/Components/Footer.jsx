import React from "react";
import Logo from "../asserts/Logo.png";
import long from "../asserts/Escultures.png";
import Line from "../asserts/img3.png";

function Footer() {
  return (
    <footer id="footer" className="bg-footer text-white">
      <div className="container">
        <div className="bg-footer-voilet position-relative">
          <div className="long">
            <img src={long} alt="Your Logo" style={{ maxHeight: "100px" }} />
            <div>
              <p className="text-center">Thanks for visiting my website</p>
              <p className="text-center">
                If you have any questions, you can write to me on any of my
                social networks. I'm sure I'll answer you.
              </p>{" "}
            </div>

            <img src={Line} alt="" height="50px" />
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <div className="col-md-3 d-flex align-items-center ">
            <img src={Logo} alt="" className="img-fluid logo-2" />
            <div className="mt-3 footerflex">
              <p>
                <a href="/" className="btn-footer text-white">
                  Home
                </a>
              </p>
              <p>
                <a href="/" className="btn-footer text-white">
                  About
                </a>
              </p>
              <p>
                <a href="/" className="btn-footer text-white">
                  Blogs
                </a>
              </p>
              <p>
                <a href="/contact-us" className="btn-footer text-white">
                  Contact us
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
