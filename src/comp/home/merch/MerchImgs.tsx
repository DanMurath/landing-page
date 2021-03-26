import { useMedia } from "../../../hooks/useMedia";
import imgOne from "../../../img/merchOne.jpg";
import imgTwo from "../../../img/merchTwo.jpg";
import { styles } from "../../../styles/styles";

export const MerchImgs: React.FC = () => {
  const { large } = useMedia();

  return (
    <div className="imgs">
      <img src={imgOne} className="z blk" alt="" style={styles.merch.imgOne} />
      <img
        src={imgTwo}
        className="z blk"
        alt=""
        style={large ? styles.merch.imgTwoLarge : styles.merch.imgTwo}
      />
      <h3>All Products</h3>
    </div>
  );
};
