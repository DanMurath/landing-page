/*
 * This file is a media query hook I've made
 * only using window.innerWidth doesn't allow
 * style changes in real time (this fixes that)
 *
 * will save a ton of time+code on styling
 *
 * issue about this is that it's 2-Dimensional
 * problem if you need specific styles for more than 2 viewports
 * probably a way to fix this
 *
 */
import { useEffect, useState } from "react";

export const useMedia = () => {
  // set type number if you need more viewports
  const [large, setLarge] = useState<boolean | undefined>(undefined);
  const [fourK, setFourK] = useState<boolean | undefined>(undefined);

  const media = () => {
    if (window.innerWidth > 993) {
      setLarge(true);
    } else {
      setLarge(false);
    }
  };

  const four = () => {
    // needed for font size changes on 4k screens
    if (window.innerWidth > 2500) {
      setFourK(true);
    } else {
      setFourK(false);
    }
  };

  /*
  const medi = () => {
    if (window.innerWidth > 1400) {       /* This fixes issue explained
      setLarge(1);                         * above
    } else if (window.innerWidth > 700) {  *
      setLarge(2);                   * in jsx we would use =
    } else {                         * large === 1 ? style.large :
      setLarge(3);                   * large === 2 ? style.med :
    }                                * style.sma
  }; */

  useEffect(() => {
    media(); // call function first so correct styles show on initial render
    four();
    window.addEventListener("resize", media); // allows real time changes
  }, []);

  return { large, fourK };
};
