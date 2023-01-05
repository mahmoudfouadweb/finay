import fanIcon from "../../assets/icons/music-headfone.svg";
import artistIcon from "../../assets/icons/music.svg";

const SecondProgress = () => {
  const headingTwo = "Enter Your code";

  const textTwo =
    "Please fill in the below information to start buying, selling and collecting NFTs on Finay.";

  return (
    <>
      <h2 className="heading-3 right__header">{headingTwo}</h2>
      <p className="right__text">{textTwo} </p>
      
      <div className="wrapper"></div>
      <p className="right__continue">
       Or continue with
      </p>
    </>
  );
};

export default SecondProgress;
