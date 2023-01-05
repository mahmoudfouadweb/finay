import arrowRight from "../../assets/icons/arrow-right.svg";
import arrowRightBlack from "../../assets/icons/arrow-right-black.svg";
import fanIcon from "../../assets/icons/music-headfone.svg";
import artistIcon from "../../assets/icons/music.svg";

const SignupRight = () => {
  return (
    <div className="right">
      <div className="right__progress--box">
        <span className="active">1</span>
        <div className="bar"></div>
        <span className="right__progress--bar">2</span>
        <div className="bar"></div>
        <span>3</span>
      </div>

      <h2 className="heading-3 right__header">Create an account</h2>
      <p className="right__text">
        Select an option to start buying, selling and collecting NFTs on Finay.
      </p>
      <h3 className="right__sub-title">Tell us a bit about you</h3>
      <div className="wrapper">
        <figure className="right__card--plan  active">
          <img src={fanIcon} alt="fan" />
          <div className="right__card--plan-title">I am a fan</div>
          <div className="right__card--plan-text">
            I want to listen and support my favorite artists.
          </div>
        </figure>

        <figure className="right__card--plan ">
          <img src={artistIcon} alt="artist" />
          <div className="right__card--plan-title">I am an Artist</div>
          <div className="right__card--plan-text">
            I want to create and release Songs with fans.
          </div>
        </figure>
      </div>

      <button className=" right__btn btn-primary">
        <span>Next</span>
        <img src={arrowRightBlack} alt="arrow next" />
      </button>
      <p className="right__login--text">
        Already have an account? <span>Login</span>
        <img src={arrowRight} alt="arrow next" />
      </p>

      <div className="copywrite">© 2022 Finay. All Rights Reserved.</div>
    </div>
  );
};

export default SignupRight;
