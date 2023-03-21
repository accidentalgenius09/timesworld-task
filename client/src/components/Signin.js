import React from "react";
import photo from "../assets/unnamed.png";
import Logincomponents from "./Logincomponents";

function Signin() {
  return (
    <div className=" container mx-auto">
      <div className="flex items-center justify-around h-screen">
        <div className="login-container grid grid-cols-2 w-7/12">
          {/* Login Component */}

          <Logincomponents className="login-components" />

          {/* image */}
          <img src={photo} className="w-44 h-72 -mt-4 ml-10" />
        </div>
      </div>
    </div>
  );
}

export default Signin;
