/*
 * Commented could be a fix for css type errors
 * This solution doesn't allow for nested styles
 *
 * export interface style {
 * [Key: string]: CSSProperties;
 * }
 * * */

export const styles = {
  nav: {
    background: "transparent",
    height: "3rem",
    padding: "2rem 0",
  },

  vid: {
    maxWidth: "1100px",
    position: "absolute" as "absolute",
    // top: "0",
    left: "calc(50%)",
    transform: "translateX(-50%)",
  },

  merch: {
    scrub: {
      width: "68%",
      position: "absolute" as "absolute", // fixes type error
      inset: "0",
      margin: "auto",
      transform: "translateY(74%)",
    },
    txt: {
      marginLeft: "60%",
    },
    imgOne: {
      maxWidth: "350px",
    },
    imgTwo: {
      maxWidth: "550px",
    },
    imgTwoLarge: {
      maxWidth: "550px",
      marginLeft: "66%",
    },
  },
};

export interface style {
  [Key: string]: React.CSSProperties;
}

export const about: style = {
  lrg: {
    height: "40vh",
    position: "relative",
    marginTop: "24rem",
  },
  sma: {
    height: "40vh",
    position: "relative",
    marginTop: "8rem",
  },
  scrub: {
    width: "71%",
    position: "absolute",
    inset: "0",
    margin: "auto",
    filter: "brightness(20%)",
    //transform: "translateY(-3rem)",
  },
  motiv: {
    fontSize: "35px",
    padding: "3rem 0",
  },
  motivLrg: {
    fontSize: "107px",
    padding: "8.5rem 0",
  },
};

export const show: style = {
  scrub: {
    position: "absolute",
    inset: "0",
    margin: "auto",
  },
  img: {
    width: "80%",
  },
};

export const part: style = {
  space: {
    paddingTop: "9rem",
  },
  spaceLrg: {
    paddingTop: "28rem",
  },
  img: {
    width: "120px",
    padding: "1rem",
  },
  imgLrg: {
    width: "150px",
    padding: "1.4rem",
  },
  partners: {
    maxWidth: "700px",
  },
  shift: {
    paddingLeft: "45%",
  },
  text: {
    fontSize: "24px",
    paddingBottom: "2rem",
  },
  textLrg: {
    fontSize: "40px",
    paddingBottom: "5rem",
  },
};

export const foot: style = {
  socials: {
    fontSize: "26px",
    padding: "1rem",
  },
  socialsLrg: {
    fontSize: "34px",
    padding: "1.5rem",
  },
};
