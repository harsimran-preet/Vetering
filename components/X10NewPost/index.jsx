import React from "react";
import Group from "../Group";
import Group8821 from "../Group8821";
import "./X10NewPost.css";

function X10NewPost(props) {
  const {
    newPost,
    inputType1,
    inputPlaceholder1,
    inputType2,
    inputPlaceholder2,
    inputType3,
    inputPlaceholder3,
    cancel,
    confirm,
    groupProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="x10-new-post screen">
        <div className="overlap-group6">
          <div className="flex-row-1">
            <div className="new-post poppins-medium-daintree-24px">{newPost}</div>
            <Group className={groupProps.className} />
          </div>
          <Group8821 />
          <div className="overlap-group2-2">
            <img className="vector-5" src="/img/vector-5@2x.svg" />
            <div className="rectangle-2145"></div>
            <input
              className="job-type poppins-medium-black-14px"
              name="jobtype_"
              placeholder={inputPlaceholder1}
              type={inputType1}
            />
          </div>
          <div className="overlap-group4">
            <img className="vector-5" src="/img/vector-9@2x.svg" />
            <div className="rectangle-2145-1"></div>
            <input
              className="description poppins-medium-black-14px"
              name="description_"
              placeholder={inputPlaceholder2}
              type={inputType2}
            />
          </div>
          <div className="overlap-group3-3">
            <img className="vector-5" src="/img/vector-9@2x.svg" />
            <div className="rectangle-2145"></div>
            <input
              className="location poppins-medium-black-14px"
              name="location_"
              placeholder={inputPlaceholder3}
              type={inputType3}
            />
          </div>
          <div className="group-container">
            <a href="javascript:history.back()">
              <div className="group-8946-1">
                <div className="overlap-group-2">
                  <div className="cancel">{cancel}</div>
                </div>
              </div>
            </a>
            <div className="overlap-group1-2">
              <div className="confirm">{confirm}</div>
            </div>
          </div>
          <div className="home-indicator-5"></div>
        </div>
      </div>
    </div>
  );
}

export default X10NewPost;
