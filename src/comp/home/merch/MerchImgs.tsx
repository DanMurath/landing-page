import { useMedia } from "../../../hooks/useMedia";
import imgOne from "../../../img/merchOne.jpg";
import imgTwo from "../../../img/merchTwo.jpg";
import { styles } from "../../../styles/styles";

export const MerchImgs: React.FC = () => {
  const { large, fourK } = useMedia();
  /*
class Music {     Don't think we can create classes inside components
    increment() { really want to learn oo programming 
      let a = 0;  I guess react is already very oo by default 
    }             
    } */

  return (
    <div className="imgs">
      <img
        src={imgOne}
        className="z blk"
        alt=""
        style={fourK ? styles.merch.imgOne4k : styles.merch.imgOne}
      />
      <img
        src={imgTwo}
        className="z blk"
        alt=""
        style={
          fourK
            ? styles.merch.imgTwo4k
            : large
            ? styles.merch.imgTwoLarge
            : styles.merch.imgTwo
        }
      />
      <h3>All Products</h3>
    </div>
  );
};
