import { useMedia } from "../../hooks/useMedia";
import { styles, show } from "../../styles/styles";
import img from "../../img/lpOne.png";
import { MerchImgs } from "./merch/MerchImgs";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const Merch: React.FC = () => {
  const { large } = useMedia();
  const txt = {
    one: "Buy awesome custom products & support the Rider.404 Project",
  };

  useEffect(() => {
    if (large === true) {
      gsap.from(".merchImg", {
        y: 100,
        scrollTrigger: {
          trigger: ".merchImg",
          start: "top bottom",
          endTrigger: ".t",
          scrub: 0.5,
        },
      });

      gsap.from(".fl", {
        y: 100,
        scrollTrigger: {
          trigger: ".fl",
          start: "top bottom",
          endTrigger: ".t",
          scrub: 0.5,
        },
      });

      /* gsap.from(".c1", { */
      /*   y: 100, */
      /*   scrollTrigger: { */
      /*     trigger: ".c1", */
      /*     start: "top bottom", */
      /*     endTrigger: ".t", */
      /*     scrub: 0.5, */
      /*   }, */
      /* }); */

      /* gsap.from(".c2", { */
      /*   y: 800, */
      /*   scrollTrigger: { */
      /*     trigger: ".c2", */
      /*     start: "top bottom", */
      /*     endTrigger: ".t", */
      /*     scrub: 0.5, */
      /*   }, */
      /* }); */
    }
  });

  return (
    <>
      {large && (
        <>
          <p className="cords c1" style={styles.cord1}>
            40.85216
          </p>
          <p className="cords c2" style={styles.cord2}>
            14.26811
          </p>
        </>
      )}
      <div className="merch" style={{ position: "relative", marginTop: "14%" }}>
        <i className="fas fa-snowflake fl" style={show.flake}></i>
        <p className="pLrg a" style={large ? styles.merch.txt : undefined}>
          {txt.one}
        </p>
        <MerchImgs />
        <div className="backScrub">
          {large && (
            <img
              className="merchImg"
              src={img}
              alt=""
              style={styles.merch.scrub}
            />
          )}
        </div>
      </div>
    </>
  );
};
