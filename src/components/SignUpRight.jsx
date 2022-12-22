import React, { useState } from "react";
import fan from "../assets/icons/music-headfone.svg";
import artist from "../assets/icons/music.svg";
import arrowRight from "../assets/icons/arrow-right.png";
import arrowRightOrange from "../assets/icons/arrow-right-orang.png";

const SignUpRight = () => {
  const activeClass = " border border-[#FF8200]";
  const inActiveClass = " bg-[#FFFFFF1A]";

  const [isActive, setIsActive] = useState(false);

  const activeHandler = (e) => {};
  return (
    <div className=" bg-[#00000040]  h-screen  basis-1/2 p-48">
      {/* Progress */}

      <div className=" text-white flex justify-start items-center gap-2 relative ">
        <div className="  bg-white text-slate-800 font-bold w-7 h-7 rounded-full border border-solid border-white flex justify-center items-center z-10">
          1
        </div>
        <div className=" h-[1px] w-10 bg-white"></div>
        <div className=" w-7 h-7 rounded-full border font-bold border-solid border-white flex justify-center items-center z-10">
          2
        </div>
        <div className=" h-[1px] w-10 bg-white"></div>
        <div className="w-7 h-7 rounded-full border font-bold border-solid border-white flex justify-center items-center  z-10">
          3
        </div>
      </div>

      <div className=" mb-8">
        <h1 className=" text-white font-bold text-3xl tracking-wide leading-10 mt-12 mb-3">
          Create an account
        </h1>
        <p className=" text-[#D5D4D8] font-semibold mb-10 leading-5 text-base">
          Select an option to start buying,<br></br> selling and collecting NFTs
          on Finay.
        </p>
        <h3 className=" text-white font-semibold text-2xl leading-3 mt-2">
          Tell us a bit about you
        </h3>
      </div>

      <div className="flex gap-8">
        <div
          style={{}}
          className={`rounded-xl p-6 w-44 cursor-pointer ${
            isActive ? activeClass : inActiveClass
          }`}
          onClick={(e) => activeHandler(e)}
          id="fan"
        >
          <img
            src={fan}
            alt="music"
            className=" rounded-full p-2 bg-[#FFFFFF24] mb-4"
          />
          <h3 className="font-semibold text-lg leading-6 tracking-wide text-white mb-3">
            I am a fan
          </h3>
          <p className=" text-[#D5D4D8] text-sm leading-5 tracking-wide">
            I want to listen and support my favorite artists.
          </p>
        </div>
        <div
          className={`rounded-xl p-6 w-44 cursor-pointer  ${
            isActive ? activeClass : inActiveClass
          }`}
          id="artist"
          onClick={(e) => activeHandler(e)}
        >
          <img
            src={artist}
            alt="music"
            className=" rounded-full p-2 bg-[#FFFFFF24] mb-4"
          />
          <h3 className="font-semibold text-lg leading-6 tracking-wide text-white mb-3">
            I am an Artist
          </h3>
          <p className=" text-[#D5D4D8] text-sm leading-5 tracking-wide">
            I want to create and release Songs with fans.
          </p>
        </div>
      </div>

      <button className=" mt-7 bg-[#ff8200] flex pt-[10px] pr-5 pb-[10px] pl-6 rounded-full w-44 justify-center items-center ">
        <span className="mr-6 text-sm font-semibold  tracking-wider text-[#341B00]">
          Next
        </span>
        <img src={arrowRight} alt="next" />
      </button>
      {/* right end */}
      <div className="flex justify-start items-center mt-10 gap-1">
        <p className=" text-white ">Already have an account?</p>
        <span className=" text-[#ff8200] flex gap-3 cursor-pointer">
          Login <img src={arrowRightOrange} alt="" />
        </span>
      </div>
      <div className="font-normal text-xs text-[#FFFFFF99] mt-6">
        © 2022 Finay. All Rights Reserved.
      </div>

      {/* end */}
    </div>
  );
};

export default SignUpRight;
