import { about } from "../../styles/styles";
import { useMedia } from "../../hooks/useMedia";

export const AboutExt: React.FC = () => {
  const { large, fourK } = useMedia();
  const ride = {
    txt: `That's the leitmotiv of the Rider.404`,
  };

  return (
    <div className="aboutExt centerText">
      <h1
        className="z"
        style={fourK ? about.motiv4k : large ? about.motivLrg : about.motive}
      >
        {ride.txt}
      </h1>
      <h3 style={about.about}>About</h3>
    </div>
  );
};
