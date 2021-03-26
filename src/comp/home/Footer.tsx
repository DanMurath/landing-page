import { part, foot } from "../../styles/styles";
import { useMedia } from "../../hooks/useMedia";

export const Footer: React.FC = () => {
  const { large } = useMedia();
  const socials = [
    { id: 0, img: "fab fa-facebook-f" },
    { id: 1, img: "fab fa-instagram" },
    { id: 2, img: "fab fa-youtube" },
    { id: 3, img: "fab fa-snapchat-ghost" },
    { id: 4, img: "fab fa-strava" },
  ];

  return (
    <div style={large ? part.spaceLrg : part.space}>
      <h2 style={large ? part.textLrg : part.text}>
        Follow
        <br /> Rider.404
      </h2>
      {socials.map((e) => {
        return (
          <i
            className={e.img}
            style={large ? foot.socialsLrg : foot.socials}
          ></i>
        );
      })}
    </div>
  );
};
