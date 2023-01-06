import heroImg from "../assets/images/hero-images.png";
import discoverImg from "../assets/icons/discover-Img.png";

const HomeContent = () => {
  return (
    <main className="homeContent">
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

      <div className="discover">
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
      </div>
    </main>
  );
};

export default HomeContent;
