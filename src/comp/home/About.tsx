import { about } from "../../styles/styles";
import img from "../../img/about.svg";
import { useEffect } from "react";
import { useMedia } from "../../hooks/useMedia";
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
  const { large } = useMedia();

  useEffect(() => {
    if (large === true) {
      gsap.from(".aboutImg", {
        y: 300,
        scrollTrigger: {
          trigger: ".aboutImg",
          start: "top bottom",
          end: "+=1900",
          scrub: true,
        },
      });
    }
  });

  return (
    <div
      className="txt centerText flexCol"
      style={large ? about.lrg : about.sma}
    >
      {large ? (
        <p
          className="pLrg z"
          style={{
            padding: "0 4rem",
            lineHeight: "1.28",
            fontSize: "40px",
          }}
        >
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
      <div className="backScrub">
        <img src={img} alt="" className="aboutImg" style={about.scrub} />
      </div>
    </div>
  );
};
