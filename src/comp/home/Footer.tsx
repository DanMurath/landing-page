import { part, foot } from "../../styles/styles";
import { useMedia } from "../../hooks/useMedia";
import { useState } from "react";

export const Footer: React.FC = () => {
  const { large, fourK } = useMedia();
  const socials = [
    { id: 0, img: "fab fa-facebook-f" },
    { id: 1, img: "fab fa-instagram" },
    { id: 2, img: "fab fa-youtube" },
    { id: 3, img: "fab fa-snapchat-ghost" },
    { id: 4, img: "fab fa-strava" },
  ];
  const cpy = {
    txt: "\u00A9 2020 RIDER.404. All rights reserved.",
    txt2: "Created by Daniel Murathodzic",
  };
  const [hov, setHov] = useState<boolean>(false);
  const enter = () => {
    setHov(true);
  };
  const leave = () => {
    setHov(false);
  };

  return (
    <div style={large ? foot.lrg : part.space}>
      <h2 style={fourK ? part.text4k : large ? part.textLrg : part.text}>
        Follow
        <br /> Rider.404
      </h2>
      {socials.map((e) => {
        return (
          <div
            style={
              hov
                ? foot.hov
                : fourK
                ? foot.circle4k
                : large
                ? foot.circleLrg
                : foot.circle
            }
            className="centerText cir"
            onMouseEnter={enter}
            onMouseLeave={leave}
          >
            <i
              className={e.img}
              style={
                fourK ? foot.socials4k : large ? foot.socialsLrg : foot.socials
              }
            ></i>
          </div>
        );
      })}
      <div style={foot.cpy} className={large ? "centerText" : undefined}>
        <p style={large ? foot.p : undefined}>{cpy.txt}</p>
        <p className="xz" style={large ? foot.p : undefined}>
          {cpy.txt2}
        </p>
      </div>
    </div>
  );
};
