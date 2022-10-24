import React from "react";
import { IoLogoWhatsapp } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const CommonPage1 = (props) => {
  return (
    <>
      <section id="header" className="d-flex align-items-center ">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div
                  id="content"
                  className=" col-md-6  pt-5  pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column mx-auto"
                >
                  <h1 className="top_heading">
                    {props.name}
                    <strong className="brand-name">
                      {" "}
                      Car Owners and Drivers
                    </strong>
                  </h1>
                  <h2 className="my-3 ">
                    कार बुक करना हुआ और भी आसन| -शादी, बिदाई, यात्रा, आदि मैं हम
                    आपको सबसे अफोर्डेबल रेट पार कार मुहैया करते हैं|
                  </h2>
                  <div className="mt-3 home_btn my-5 ">
                    <a
                      href="https://wa.me/919451549292?text=aap sa welcome hai. btaoo kunsi car book karni hai"
                      className="whatsaap_btn"
                      role="button"
                    >
                      <IoLogoWhatsapp className="whts_btn" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-6   order-1 order-lg-2 header-img">
                  <img
                    src={props.imgsrc}
                    alt="refresh"
                    className="img-fluid animated"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CommonPage1;
