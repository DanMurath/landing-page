import { about, show, styles } from "../../styles/styles";
//import { useEffect } from "react";
import img from "../../img/lpTwo.png";
import imgTwo from "../../img/show1.jpg";
import { useMedia } from "../../hooks/useMedia";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const Showcase: React.FC = () => {
  const { large, fourK } = useMedia();
  /* useEffect(() => { */
  /*   gsap.from(".showScrub", { */
  /*     y: 400, */
  /*     scrollTrigger: { */
  /*       trigger: ".showScrub", */
  /*       start: "top bottom", */
  /*       endTrigger: ".xz", */
  /*       scrub: true, */
  /*     }, */
  /*   }); */
  /* }); */

  return (
    // note for next time
    // <>/</> can be the 'parent' divs jsx needs
    <>
      <p className="cords c5" style={styles.cord1}>
        51.48135
      </p>
      <p className="cords c6" style={styles.cord6}>
        -3.17845
      </p>
      <div
        className="flex"
        style={fourK ? show.lrg : large ? about.lrg : about.sma}
      >
        <img src={imgTwo} alt="" className="z" style={show.img} />
        <img
          src={img}
          alt=""
          style={large ? show.scrubLrg : show.scrub}
          className="showScrub"
        />
      </div>
    </>
  );
};
