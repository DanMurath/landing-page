import { about, styles } from "../../styles/styles";
import img from "../../img/about.svg";
import { useMedia } from "../../hooks/useMedia";
//import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const About: React.FC = () => {
  const ride = {
    quote: `Ride with your friends, ride with your idols,
            ride for fun, ride to surpass yourself, ride to
            perform, ride to discover, to discover yourself.
            Ride, always ride...But Always
           ´Love2Ride4Love’`,
    txt: `That's the leitmotiv of the Rider.404`,
  };
  const { large, fourK } = useMedia();

  /* useEffect(() => { */
  /*   gsap.from(".c3", { */
  /*     y: 300, */
  /*     scrollTrigger: { */
  /*       trigger: ".c3", */
  /*       start: "top bottom", */
  /*       endTrigger: ".z", */
  /*       scrub: true, */
  /*     }, */
  /*   }); */

  /*   gsap.from(".c4", { */
  /*     y: 300, */
  /*     scrollTrigger: { */
  /*       trigger: ".c4", */
  /*       start: "top bottom", */
  /*       endTrigger: ".z", */
  /*       scrub: true, */
  /*     }, */
  /*   }); */
  /* }); */

  return (
    <>
      <p className="cords c3" style={styles.cord3}>
        44.53725
      </p>
      <p className="cords c4" style={styles.cord4}>
        18.67336
      </p>
      <div
        className="txt centerText flexCol"
        style={large ? about.lrg : about.sma}
      >
        <i className="fas fa-bolt b1" style={about.boltOne}></i>
        <i className="fas fa-bolt b2" style={about.boltTwo}></i>
        <div className="boltThr" style={{ transform: "translateY(-14rem)" }}>
          <i className="fas fa-bolt b3" style={about.boltThr}></i>
        </div>
        {large ? (
          <p className="pLrg z" style={fourK ? about.quote4k : about.quote}>
            Ride with your friends, ride with your
            <br /> idols,
            <br />
            ride for fun, ride to surpass yourself, ride
            <br /> to
            <br />
            perform, ride to discover, to discover
            <br /> yourself.
            <br />
            Ride, always ride...But Always
            <br />
            ´Love2Ride4Love’
          </p>
        ) : (
          <p className="pLrg z" style={{ lineHeight: "1.5" }}>
            {ride.quote}
          </p>
        )}
        <div className="backScrub t">
          <img
            src={img}
            alt=""
            className="aboutImg"
            style={large ? about.scrubLrg : about.scrub}
          />
        </div>
      </div>
    </>
  );
};
