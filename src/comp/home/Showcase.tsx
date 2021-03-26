import { about, show } from "../../styles/styles";
import img from "../../img/lpTwo.png";
import imgTwo from "../../img/show1.jpg";
import { useMedia } from "../../hooks/useMedia";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const Showcase: React.FC = () => {
  const { large } = useMedia();
  useEffect(() => {
    if (large === true) {
      gsap.from(".showScrub", {
        y: 200,
        scrollTrigger: {
          trigger: ".showScrub",
          start: "top bottom",
          end: "+=1500",
          scrub: true,
        },
      });
    }
  });

  return (
    // note for next time
    // <>/</> can be the 'parent' divs jsx needs
    <>
      <div className="flex" style={large ? about.lrg : about.sma}>
        <img src={imgTwo} alt="" className="z" style={show.img} />
        <img src={img} alt="" style={show.scrub} className="showScrub" />
      </div>
    </>
  );
};
