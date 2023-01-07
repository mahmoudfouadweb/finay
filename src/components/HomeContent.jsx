import heroImg from "../assets/images/hero-images.png";
import thumbnail1 from "../assets/images/thumbnail-1.png";
import discoverImg from "../assets/icons/discover-Img.png";
import cardIconRed from "../assets/icons/card-icon--red.png";
import cardIcon from "../assets/icons/card-icon.svg";

const HomeContent = () => {
  return (
    <main className="home-content">
      <section className="hero">
        <h1 className="heading-1">
          All the best music NFT on <span>Finay</span>
        </h1>
        <p className="hero__text">
          Create or explore the best music NFT from your favorite artists.
        </p>
        <button className="btn btn-primary">Explore</button>
        <img src={heroImg} alt="" className="hero__image" />
      </section>

      {/* <div className="discover">
        <img src={discoverImg} alt="" className="discover__img" />
        <h3 className="heading-3">
          Discover event, merch, songs at one place.
        </h3>
        <p className="discover__text">
          Now you can easily create event, merch, songs by just clicking the
          below button. You can easily promote songs in the market and win
          backstage pass.
        </p>
        <button className="btn btn-primary">Create</button>
      </div> */}

      <div className="home-content__title-box">
        <h4 className="heading-4">What's hot</h4>
        <p>See all</p>
      </div>
      
      <section className="whats-hot">
        <figure className="card">
          <img src={thumbnail1} alt="" className="card__thumbnail" />
          <img src={cardIcon} alt="" className="card__icon" />
          
          <div className="card__content">
          <img src={cardIconRed} alt="" className="card__red" />
            <h6 className="card__name">Reo Cragun</h6>
            <p className="card__type">gems</p>
            <p className="card__title">Framework</p>
            <p className="card__rate">2.25</p>
            <button className="btn-card">Buy</button>
          </div>
        </figure>
        
        <figure className="card">
          <img src={thumbnail1} alt="" className="card__thumbnail" />
          <img src={cardIcon} alt="" className="card__icon" />
          
          <div className="card__content">
          <img src={cardIconRed} alt="" className="card__red" />
            <h6 className="card__name">Reo Cragun</h6>
            <p className="card__type">gems</p>
            <p className="card__title">Framework</p>
            <p className="card__rate">2.25</p>
            <button className="btn-card">Buy</button>
          </div>
        </figure>

      </section>
    </main>
  );
};

export default HomeContent;
