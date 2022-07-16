import React from "react";
import { Link } from "react-router-dom";
import Group from "../Group";
import BarsHomeIndicatorIPhoneLightPortrai from "../BarsHomeIndicatorIPhoneLightPortrai";
import "./X08VerificationComplete.css";

function X08VerificationComplete(props) {
  const { numberVerifiedSeccessfully, login } = props;

  return (
    <div className="container-center-horizontal">
      <div className="x08-verification-complete screen">
        <Group />
        <div className="group-8831-1">
          <div className="overlap-group1-6">
            <img className="logo-1-1" src="/img/logo-1-1@2x.svg" />
            <div className="number-verified-seccessfully poppins-medium-daintree-26px">
              {numberVerifiedSeccessfully}
            </div>
          </div>
        </div>
        <Link to="/09-home">
          <div className="group-16-2">
            <div className="overlap-group-12">
              <div className="login-8 poppins-medium-white-14px">{login}</div>
            </div>
          </div>
        </Link>
        <BarsHomeIndicatorIPhoneLightPortrai />
      </div>
    </div>
  );
}

export default X08VerificationComplete;
