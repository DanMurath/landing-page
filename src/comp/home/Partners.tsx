import { part, styles } from "../../styles/styles";
import { useMedia } from "../../hooks/useMedia";
import p1 from "../../img/p1.png";
import p2 from "../../img/p2.png";
import p3 from "../../img/p3.png";
import p4 from "../../img/p4.png";
import p5 from "../../img/p5.png";
import p6 from "../../img/p6.png";
import p7 from "../../img/p7.png";
import p8 from "../../img/p8.png";
import p9 from "../../img/p9.png";
import p10 from "../../img/p10.png";
import arrow from "../../img/arrows.svg";
import grid from "../../img/grid.svg";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const Partners: React.FC = () => {
  const { large, fourK } = useMedia();
  const img = [
    { key: 0, img: p1 },
    { key: 1, img: p2 },
    { key: 2, img: p3 },
    { key: 3, img: p4 },
    { key: 4, img: p5 },
    { key: 5, img: p6 },
    { key: 6, img: p7 },
    { key: 7, img: p8 },
    { key: 8, img: p9 },
    { key: 9, img: p10 },
  ];
  useEffect(() => {
    if (large === true) {
      gsap.from(".c7", {
        y: 340,
        scrollTrigger: {
          trigger: ".c7",
          start: "top bottom",
          endTrigger: ".xz",
          scrub: true,
        },
      });

      gsap.from(".c8", {
        y: 170,
        scrollTrigger: {
          trigger: ".c8",
          start: "top bottom",
          endTrigger: ".xz",
          scrub: true,
        },
      });

      gsap.from(".arr", {
        y: 370,
        scrollTrigger: {
          trigger: ".arr",
          start: "top bottom",
          endTrigger: ".xz",
          scrub: true,
        },
      });

      gsap.from(".grid", {
        y: 220,
        scrollTrigger: {
          trigger: ".grid",
          start: "top bottom",
          endTrigger: ".xz",
          scrub: true,
        },
      });
    }
  });

  return (
    <>
      <div className="y" style={large ? part.spaceLrg : part.space}>
        {large && (
          <>
            <p className="cords c7" style={styles.cord7}>
              ??.?????
            </p>
            <p className="cords c8" style={styles.cord8}>
              ?.?????
            </p>
          </>
        )}
        <div className="shift" style={large ? part.shift : undefined}>
          <img src={arrow} className="cords arr" style={styles.cord3} alt="" />
          {large && (
            <img src={grid} className="cords grid" style={styles.grid} alt="" />
          )}
          <h2
            className="z"
            style={fourK ? part.text4k : large ? part.textLrg : part.text}
          >
            Partners & <br /> Collaboraters
          </h2>
          <div
            className="part z"
            style={fourK ? part.partners4k : part.partners}
          >
            {img.map((e) => {
              return (
                <img
                  src={e.img}
                  alt=""
                  style={fourK ? part.img4k : large ? part.imgLrg : part.img}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
