import React from "react";
import logo from "../assets/icons/logo-2.svg";
import signup from "../assets/icons/signup-img.png";
import signupVictor from "../assets/icons/signup-victor.svg";
import fan from "../assets/icons/music-headfone.svg";
import artist from "../assets/icons/music.svg";
import arrowLeft from "../assets/icons/arrow-left.png";

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
            alt="logo"
            className=" w-[12px] h-[12px] absolute left-[-2.00rem] top-[0.4rem] -translate-x-1/2 translate-y-1/2 "
          />
        </div>

        <div className=" flex flex-col gap-10 ">
          <h1 className=" text-white text-5xl font-bold leading-5 tracking-wide">
            Get your free<span className=" text-[#FF8200] "> NFT</span>
          </h1>
          <p className=" text-[#D5D4D8] text-lg leading-6 self-center pr-[16.7rem] tracking-wide ">
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

      {/* Right */}

      <div className=" bg-[#00000040]  h-screen  basis-1/2 p-48">
        {/* Progress */}

        <div className=" text-white flex justify-start items-start gap-8 relative ">
          <div className=" absolute  bg-white w-28 translate-x-1/4 translate-y-1/2 bottom-3" />
          <div className="  bg-white text-slate-800 font-bold w-7 h-7 rounded-full border border-solid border-white flex justify-center items-center z-10">
            1
          </div>
          <div className=" w-7 h-7 rounded-full border font-bold border-solid border-white flex justify-center items-center z-10">
            2
          </div>
          <div className="w-7 h-7 rounded-full border font-bold border-solid border-white flex justify-center items-center  z-10">
            3
          </div>
        </div>

        <div className=" mb-8">
          <h1 className=" text-white font-semibold text-4xl tracking-wide leading-10 mt-12 mb-4">
            Create an account
          </h1>
          <p className=" text-[#D5D4D8] font-medium mb-10 leading-5 text-base">
            Select an option to start buying,<br></br> selling and collecting
            NFTs on Finay.
          </p>
          <h3 className=" text-white font-semi-bold text-2xl leading-3 mt-2">
            Tell us a bit about you
          </h3>
        </div>

        <div className="flex gap-8">
          <div className=" rounded-xl border border-[#FF8200] p-6">
            <img
              src={fan}
              alt="music"
              className=" rounded-full p-2 bg-[#FFFFFF24]"
            />
            <h3 className=" font-semibold text-lg leading-6 tracking-wide ">I am a fan</h3>
            <p>I want to listen and support my favorite artists.</p>
          </div>
          <div className=" rounded-xl border border-[#FF8200] p-6">
            <img
              src={artist}
              alt="music"
              className=" rounded-full p-2 bg-[#FFFFFF24]"
            />
            <h3>I am a fan</h3>
            <p>I want to listen and support my favorite artists.</p>
          </div>
        </div>
        {/* right end */}
      </div>

      {/* end */}
    </div>
  );
};

export default SignUp;
