import React from "react";
import { Link } from "react-router-dom";
import Check from "../Check";
import "./X02SignIn.css";

function X02SignIn(props) {
  const {
    signIn,
    x39908191,
    place,
    phoneNotch,
    inputType1,
    inputPlaceholder1,
    inputType2,
    inputPlaceholder2,
    group7992,
    login,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="x02-sign-in screen">
        <div className="overlap-group3-2">
          <div className="flex-row">
            <a href="javascript:history.back()">
              <div className="group-8946">
                <img className="feather-icon-chevron-left" src="/img/feather-icon---chevron-left@2x.svg" />
              </div>
            </a>
            <div className="sign-in poppins-medium-daintree-16px">{signIn}</div>
          </div>
          <img className="x3990819-1" src={x39908191} />
          <div className="place poppins-medium-daintree-24px">{place}</div>
          <div className="overlap-group1-1">
            <img className="phone-notch" src={phoneNotch} />
            <input
              className="mobile-number poppins-normal-shuttle-gray-14px"
              name="mobilenumber"
              placeholder={inputPlaceholder1}
              type={inputType1}
            />
          </div>
          <div className="overlap-group2-1">
            <img className="group-7976" src="/img/group-7976@2x.svg" />
            <input
              className="password poppins-normal-shuttle-gray-14px"
              name="password"
              placeholder={inputPlaceholder2}
              type={inputType2}
            />
          </div>
          <Check />
          <Link to="/09-home">
            <img className="group-7992" src={group7992} />
          </Link>
          <Link to="/03-sign-up-page">
            <div className="group-8945">
              <div className="overlap-group-1">
                <div className="login-1 poppins-medium-white-14px">{login}</div>
              </div>
            </div>
          </Link>
          <div className="home-indicator-4"></div>
        </div>
      </div>
    </div>
  );
}

export default X02SignIn;
