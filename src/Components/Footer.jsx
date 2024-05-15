import React from "react";
import Logo from "../asserts/Logo.png";
import long from "../asserts/Escultures.png";
import Line from "../asserts/img3.png";
import "./styles.css";

function Footer() {
  return (
    <footer id="footer" className="bg-footer text-white ">
      <div className="container custom-container">
        <div className="voilet-container d-flex justify-content-between">
          <img src={long} alt="" className="long-img" />
          <div className="ptags">
            {" "}
            <p>
              <b>Thanks for visit my website</b>
            </p>
            <p>
              <b>
                If you have any questions you can write me to any of my social
                networks, I am sure I will answer you.
              </b>
            </p>{" "}
          </div>

          <img src={Line} alt="" className="Line-img" />
        </div>
        <div className="d-flex justify-content-center align-items-center custom-main-footer ">
          <div className="col-md-6 d-flex j pt-5 mt-5">
            <img src={Logo} alt="" className="img-fluid logo-2 mt-5" />
            <div className="mt-5 footerflex">
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
