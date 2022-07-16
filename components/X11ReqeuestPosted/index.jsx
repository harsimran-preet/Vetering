import React from "react";
import { Link } from "react-router-dom";
import Group from "../Group";
import BarsHomeIndicatorIPhoneLightPortrai from "../BarsHomeIndicatorIPhoneLightPortrai";
import "./X11ReqeuestPosted.css";

function X11ReqeuestPosted(props) {
  const { title, login } = props;

  return (
    <div className="container-center-horizontal">
      <div className="x11-reqeuest-posted screen">
        <Group />
        <div className="group-8831">
          <h1 className="title poppins-medium-daintree-26px">{title}</h1>
          <img className="logo-1" src="/img/logo-1@2x.svg" />
        </div>
        <Link to="/09-home">
          <div className="group-16">
            <div className="overlap-group">
              <div className="login poppins-medium-white-14px">{login}</div>
            </div>
          </div>
        </Link>
        <BarsHomeIndicatorIPhoneLightPortrai />
      </div>
    </div>
  );
}

export default X11ReqeuestPosted;
