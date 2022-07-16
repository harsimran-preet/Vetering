import React from "react";
import "./Group2.css";

function Group2(props) {
  const { className } = props;

  return (
    <div className={`group-6 ${className || ""}`}>
      <div className="overlap-group2-3">
        <img className="vetering-1-6-5" src="/img/vetering--1--6@2x.png" />
      </div>
      <img className="vector-7" src="/img/vector-3@2x.svg" />
    </div>
  );
}

export default Group2;
