import { Parallax, ParallaxBanner } from "react-scroll-parallax";
import "./styleHoney.css";
import imageBg from "../../images/honey1.webp";

const HoneyPage = () => {
  return (
    <div className="containerMain">
      <ParallaxBanner
        layers={[{ image: imageBg, speed: -40 }]}
        className="firstParallax"
      >
        <div className="bgTransparent" />
        <div className="firstBox">
          <h1>Aqui falaremos sobre as produções</h1>
        </div>
      </ParallaxBanner>
    </div>
  );
};

export default HoneyPage;
