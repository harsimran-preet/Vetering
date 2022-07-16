import React from "react";
import { Link } from "react-router-dom";
import TextField from "../TextField";
import BarsHomeIndicatorIPhoneLightPortrai from "../BarsHomeIndicatorIPhoneLightPortrai";
import "./X07OTP.css";

function X07OTP(props) {
  const { size, otpCode, enterOtpHere, otpHasBeenSentYourMobileNumber, login1, login2 } = props;

  return (
    <div className="container-center-horizontal">
      <div className="x07-otp screen">
        <div className="group-8815-1">
          <div className="overlap-group-9">
            <img className="shape-1" src="/img/shape@2x.svg" />
            <a href="javascript:history.back()">
              <img className="size-1" src={size} />
            </a>
          </div>
          <div className="otp-code poppins-medium-daintree-16px">{otpCode}</div>
        </div>
        <img className="undraw_message_sent_1030-1" src="/img/undraw-message-sent-1030-1@2x.svg" />
        <div className="overlap-group1-4">
          <div className="group-8829">
            <div className="enter-otp-here poppins-normal-daintree-14px">{enterOtpHere}</div>
            <p className="otp-has-been-sent-your-mobile-number">{otpHasBeenSentYourMobileNumber}</p>
            <div className="login-4">{login1}</div>
          </div>
          <TextField />
        </div>
        <Link to="/08-verification-complete">
          <div className="group-16-1">
            <div className="overlap-group-10">
              <div className="login-5 poppins-medium-white-14px">{login2}</div>
            </div>
          </div>
        </Link>
        <BarsHomeIndicatorIPhoneLightPortrai />
      </div>
    </div>
  );
}

export default X07OTP;
