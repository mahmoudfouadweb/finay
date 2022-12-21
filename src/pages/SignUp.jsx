import React from "react";
import logo from "../assets/icons/logo-2.svg";
import signup from "../assets/icons/signup-img.png";
import signupVictor from "../assets/icons/signup-victor.svg";

const SignUp = () => {
  return (
    <div className=" bg-[#181A20] w-screen h-screen">
      <div className="left">
        <div>
          <img src={logo} alt="logo" />
        </div>

        <div>
          <h1 className=" text-white text-5xl font-bold leading-5">
            Get your free<span className=" text-[#FF8200] "> NFT</span>
          </h1>
          <p className=" text-[#D5D4D8] text-lg leading-6">
            Get your first NFT free! Create an account and be entered to win one
            of 5,000 limited edition songs.
          </p>
        </div>
        <div>
          <img src={signup} alt="signup" />
          <img src={signupVictor} alt="signup" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
