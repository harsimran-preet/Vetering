import React from "react";
import { Link } from "react-router-dom";
import Group from "../Group";
import "./X09Home.css";

function X09Home(props) {
  const { place, login1, login2, vetering15, iconHome, iconPlus, iconUser, groupProps } = props;

  return (
    <div className="container-center-horizontal">
      <div className="x09-home screen">
        <div className="overlap-group4-3">
          <div className="flex-row-4">
            <div className="place-2 poppins-medium-daintree-24px">{place}</div>
            <Group className={groupProps.className} />
          </div>
          <div className="overlap-group-14">
            <div className="login-11 poppins-medium-white-14px">{login1}</div>
          </div>
          <Link to="/10-new-post">
            <div className="group-8945-1">
              <div className="overlap-group1-8">
                <div className="login-12 poppins-medium-white-14px">{login2}</div>
              </div>
            </div>
          </Link>
          <div className="overlap-group5-3">
            <div className="overlap-group2-6">
              <img className="vector-11" src="/img/vector@2x.svg" />
              <div className="rectangle-2145-5"></div>
            </div>
            <img className="vetering-1-5" src={vetering15} />
          </div>
          <div className="group-container-3">
            <div className="group-8946-3">
              <img className="icon-home-1" src={iconHome} />
            </div>
            <Link to="/10-new-post">
              <div className="group-8947-1">
                <img className="icon-plus-1" src={iconPlus} />
              </div>
            </Link>
            <Link to="/13-profile">
              <div className="group-8948-1">
                <img className="icon-user-1" src={iconUser} />
              </div>
            </Link>
          </div>
          <div className="home-indicator-9"></div>
        </div>
      </div>
    </div>
  );
}

export default X09Home;
