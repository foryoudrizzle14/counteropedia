import React from "react";
import logo from "./images/react.png";

function Header() {
  return (
    <div className="py-2 pl-2" style={{ borderBottom: "2px soild #0f0101d8" }}>
      <img src={logo} alt="" style={{ height: "35px", verticalAlign: "top" }} />
      <span className="h2 pt-4 m-2 text-black-50">countopedia</span>
    </div>
  );
}

export default Header;
