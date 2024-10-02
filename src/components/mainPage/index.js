import { Parallax, ParallaxBanner } from "react-scroll-parallax";
import "./styleMain.css";
import imageBg from "../../images/pordosol.JPEG";
import imageBg2 from "../../images/sobrenuvens.JPEG";
import imageFlower from "../../images/flower.JPEG";
import imageFruit from "../../images/fruit.JPEG";
import imageMatriz from "../../images/matriz.jpg";
import imageLago from "../../images/lago.jpg";
import { Divider } from "@mui/material";

const MainPage = () => {
  return (
    <div className="containerMain">
      <ParallaxBanner
        layers={[{ image: imageBg, speed: -40 }]}
        className="firstParallax"
      >
        <div className="firstBox">
          <h1>Sítio Serra Azul</h1>
        </div>
      </ParallaxBanner>
      <Divider />
      <ParallaxBanner
        layers={[{ image: imageBg2, speed: -40 }]}
        className="firstParallax"
      >
        <div className="bgTransparent" />
        <div className="secondBox">
          <h3>
            Incrustado na Serra do Mar em meio a lagos e nascentes, cercado
            pelas reservas de Mata Atlântica.
          </h3>
          <h3>
            Propícia a vivência rural e a cultura caipira, com produtos
            tradicionais, experiências únicas, animais de fazenda e frutas
            locais.
          </h3>
        </div>
      </ParallaxBanner>
      <Divider />
      <ParallaxBanner
        layers={[{ image: imageLago, speed: -40 }]}
        className="firstParallax"
      >
        <div className="bgTransparent" />
        <div className="secondBox">
          <h3>
            Total contato com a natureza.
          </h3>
          <h3>
            Longe dos grandes centros vivenciando a paz e silêncio da mata. Tenha a experiência de conhecer o espírito caipira.
          </h3>
        </div>
      </ParallaxBanner>
      <Divider />
      <ParallaxBanner
        layers={[
            // { image: imageMatriz, speed: -40 },
          {
            speed: -15,
            children: (
              <div className="firstImageBox">
                <div className="bgTransparentChurch" />
                <img src={imageMatriz} alt="Matriz" />
              </div>
            ),
          },
        ]}
        className="firstParallax"
      >
        {/* <div className="bgTransparent" /> */}
        <div className="secondBox">
          <h3>Apenas 30 minutos do centro de São Luiz do Paraitinga.</h3>
          <h3>
            Você pode conhecer o centro histórico de São Luiz, a igreja matriz,
            praticar esportes de aventura, degustar a verdadeira comida caipira
            e muito mais.
          </h3>
        </div>
      </ParallaxBanner>
    </div>
  );
};

export default MainPage;
