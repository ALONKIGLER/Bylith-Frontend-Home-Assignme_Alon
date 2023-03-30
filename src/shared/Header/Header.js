import React from "react";
import MainNavigation from "../MainNavigation/MainNavigation";
import "./Header.scss";

/**
 * @author
 * @function Header
 **/

export const Header = (props) => {
  return (
    <div>
      <h1>
        <div>
          <span className="SPECTRUM">
            SPECTR<span className="text-style-1">U</span>M
          </span>
        </div>
        <div className="Shape-46"></div>
        <span className="HOME">HOME</span>
      </h1>
    </div>
  );
};
