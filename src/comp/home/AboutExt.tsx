import { about } from "../../styles/styles";
import { useMedia } from "../../hooks/useMedia";

export const AboutExt: React.FC = () => {
  const { large } = useMedia();
  const ride = {
    txt: `That's the leitmotiv of the Rider.404`,
  };

  return (
    <div className="aboutExt centerText">
      <h1 className="z" style={large ? about.motivLrg : about.motiv}>
        {ride.txt}
      </h1>
      <h3 style={about.about}>About</h3>
    </div>
  );
};
