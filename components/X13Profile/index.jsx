import React from "react";
import { Link } from "react-router-dom";
import Group from "../Group";
import Group8821 from "../Group8821";
import "./X13Profile.css";

function X13Profile(props) {
  const { profile, jensonCarr, place, login1, login2, iconHome, iconPlus, iconUser, groupProps } = props;

  return (
    <div className="container-center-horizontal">
      <div className="x13-profile screen">
        <div className="overlap-group5-2">
          <div className="flex-row-3">
            <div className="profile poppins-medium-daintree-24px">{profile}</div>
            <Group className={groupProps.className} />
          </div>
          <Group8821 />
          <div className="overlap-group2-5">
            <img className="vector-10" src="/img/vector-5@2x.svg" />
            <div className="rectangle-2145-4"></div>
            <div className="jenson-carr poppins-medium-black-20px">{jensonCarr}</div>
          </div>
          <div className="overlap-group4-2">
            <img className="vector-10" src="/img/vector-5@2x.svg" />
            <div className="rectangle-2145-4"></div>
            <div className="place-1 poppins-medium-black-20px">{place}</div>
          </div>
          <div className="overlap-group1-7">
            <div className="login-9 poppins-medium-white-14px">{login1}</div>
          </div>
          <div className="overlap-group-13">
            <div className="login-10 poppins-medium-white-14px">{login2}</div>
          </div>
          <div className="group-container-2">
            <Link to="/09-home">
              <div className="group-8946-2">
                <img className="icon-home" src={iconHome} />
              </div>
            </Link>
            <div className="group-8947">
              <img className="icon-plus" src={iconPlus} />
            </div>
            <div className="group-8948">
              <img className="icon-user" src={iconUser} />
            </div>
          </div>
          <div className="home-indicator-8"></div>
        </div>
      </div>
    </div>
  );
}

export default X13Profile;
