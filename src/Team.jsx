import React from "react";
import Jello from "react-reveal/Jello";
import Pulse from "react-reveal/Pulse";
const Team = (props) => {
  return (
    <>
      <div className="team_main m-5">
        <Jello>
          <div className="col-md-4 mb-5 h-100 col-12 mx-auto">
            <div className="card  ">
              <div className="card-img">
                <img
                  className="card-img-top overflow-hidden"
                  src="https://img.freepik.com/free-vector/man-profile-cartoon_18591-58482.jpg?size=338&ext=jpg"
                  alt="Card cap"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title font-weight-bold">
                  Founder of Krishna Medical Store and Car services
                </h5>
                <p className="card-text">Arvind Yadav</p>
              </div>
            </div>
          </div>
        </Jello>
      </div>
    </>
  );
};

export default Team;
