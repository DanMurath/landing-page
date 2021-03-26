import { styles } from "../../styles/styles";
import { useMedia } from "../../hooks/useMedia";
import vid from "../../img/intro.mp4";

export const Intro: React.FC = () => {
  const { large } = useMedia();

  return (
    <div className="intro centerText">
      <h1 className={large ? "h1Big" : "h1Small"}>RIDER.404</h1>
      <div
        className="vid"
        style={{
          height: "70vh",
          position: "relative",
        }}
      >
        <video
          src={vid}
          autoPlay
          loop
          muted
          playsInline
          style={styles.vid}
        ></video>
      </div>
    </div>
  );
};
