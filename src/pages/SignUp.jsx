import React from "react";
import logo from "../assets/icons/logo-2.svg";
import signup from "../assets/icons/signup-img.png";
import signupVictor from "../assets/icons/signup-victor.svg";
import arrowLeft from "../assets/icons/arrow-left.png";
import SignUpRight from "../components/SignUpRight";


const SignUp = () => {
  return (
    <div className=" bg-[#181A20] h-screen w-screen flex">
      <div className="container p-48 w-1/2 flex flex-col gap-10 items-start basis-1/2 ">
        <div className="relative">
          <img
            src={logo}
            alt="logo"
            className=" w-4 h-10 relative self-start"
          />
          <img
            src={arrowLeft}
            alt="back"
            className=" w-[12px] h-[12px] absolute left-[-2.00rem] top-[0.4rem] -translate-x-1/2 translate-y-1/2 "
          />
        </div>

        <div className=" flex flex-col gap-10 ">
          <h1 className=" text-white text-5xl font-bold leading-5 tracking-wide">
            Get your free<span className=" text-[#FF8200] "> NFT</span>
          </h1>
          <p className=" text-[#D5D4D8] text-lg leading-6 self-center  tracking-wide ">
            Get your first NFT free! Create an account and be entered to win one
            of 5,000 limited edition songs.
          </p>
        </div>
        <div className=" relative z-10">
          <img src={signup} alt="signup" />
          <img
            src={signupVictor}
            alt="signup"
            className=" absolute left-8 bottom-0 -translate-x-1/2 -translate-y-1/4 -z-10"
          />
        </div>
      </div>
      <SignUpRight />
      {/* Right */}


    </div>
  );
};

export default SignUp;
