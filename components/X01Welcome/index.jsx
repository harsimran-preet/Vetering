import React from "react";
import { Link } from "react-router-dom";
import Group2 from "../Group2";
import "./X01Welcome.css";

function X01Welcome(props) {
  const { login1, login2, ourGoalIsToConne, vetering, group2Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="x01-welcome screen">
        <div className="overlap-group3-6">
          <div className="screen">
            <div className="home-indicator-7"></div>
          </div>
          <Link to="/02-sign-in">
            <div className="long-button">
              <div className="login-6 poppins-medium-white-14px">{login1}</div>
            </div>
          </Link>
          <div className="overlap-group-11">
            <div className="login-7 poppins-medium-white-14px">{login2}</div>
          </div>
          <div className="overlap-group1-5">
            <img className="vector-9" src="/img/vector@2x.svg" />
            <div className="rectangle-2145-3"></div>
            <p className="our-goal-is-to-conne poppins-normal-shuttle-gray-14px">{ourGoalIsToConne}</p>
          </div>
          <div className="vetering poppins-medium-daintree-24px">{vetering}</div>
          <Group2 className={group2Props.className} />
        </div>
      </div>
    </div>
  );
}

export default X01Welcome;
