import { part } from "../../styles/styles";
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

export const Partners: React.FC = () => {
  const { large } = useMedia();
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

  return (
    <div className="" style={large ? part.spaceLrg : part.space}>
      <div className="shift" style={large ? part.shift : undefined}>
        <h2 style={large ? part.textLrg : part.text}>
          Partners & <br /> Collaboraters
        </h2>
        <div className="part" style={part.partners}>
          {img.map((e) => {
            return (
              <img src={e.img} alt="" style={large ? part.imgLrg : part.img} />
            );
          })}
        </div>
      </div>
    </div>
  );
};
