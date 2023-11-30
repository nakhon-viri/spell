import React from "react";
import "./switch.css";

const page = () => {
  return (
    <label className="switch">
      <input type="checkbox" hidden />
      <div className="switch__wrapper">
        <div className="switch__toggle" />
      </div>
    </label>
  );
};

export default page;
