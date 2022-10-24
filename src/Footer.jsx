import React from "react";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTwitter,
} from "react-icons/io5";
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <footer className="w-100 bg-light text-center  footer_sec  ">
        <div>
          {" "}
          <p>
            ©️ {year} krishna Medical Store and Car Booking Services. All Rights
            Reserved | Terms and Conditions
          </p>
        </div>
        <div className=" d-flex justify-content-around  ">
          <button
            className=" border-0 bg-transparent btn-outline-primary"
            href="https://twitter.com/aiactr"
          >
            <IoLogoTwitter />
          </button>
          <button
            className=" border-0 bg-transparent  btn-outline-primary  "
            href="https://www.facebook.com/aiactr.dtte.5"
          >
            <IoLogoFacebook />
          </button>
        </div>
      </footer>
    </>
  );
};

export default Footer;
