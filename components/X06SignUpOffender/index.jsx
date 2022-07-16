import React from "react";
import Group2 from "../Group2";
import "./X06SignUpOffender.css";

function X06SignUpOffender(props) {
  const { signUp, ourRecordsShowTha, login } = props;

  return (
    <div className="container-center-horizontal">
      <div className="x06-sign-up-offender screen">
        <div className="overlap-group3-5">
          <div className="sign-up-1 poppins-medium-daintree-24px">{signUp}</div>
          <div className="group-container-1">
            <div className="overlap-group1-3">
              <img className="vector-6" src="/img/vector@2x.svg" />
              <div className="rectangle-2145-2"></div>
              <p className="our-records-show-tha poppins-normal-shuttle-gray-14px">{ourRecordsShowTha}</p>
            </div>
            <Group2 />
          </div>
          <div className="overlap-group-8">
            <div className="login-3 poppins-medium-white-14px">{login}</div>
          </div>
          <div className="home-indicator-6"></div>
        </div>
      </div>
    </div>
  );
}

export default X06SignUpOffender;
