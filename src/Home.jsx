import React from "react";
import carBook from "./images/book_cars.png";
import CommonPage1 from "./CommonPage1";

const Home = () => {
  return (
    <>
      <CommonPage1 name="We have team of" imgsrc={carBook} btname="Book Cars" />
    </>
  );
};

export default Home;
