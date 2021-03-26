import { useMedia } from "../../hooks/useMedia";
import { styles } from "../../styles/styles";
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
        y: 200,
        scrollTrigger: {
          trigger: ".merchImg",
          start: "top bottom",
          end: "+=1900",
          scrub: true,
        },
      });
    }
  });

  return (
    <div className="merch" style={{ position: "relative" }}>
      <p className="pLrg" style={large ? styles.merch.txt : undefined}>
        {txt.one}
      </p>
      <MerchImgs />
      <div className="backScrub">
        <img className="merchImg" src={img} alt="" style={styles.merch.scrub} />
      </div>
    </div>
  );
};
