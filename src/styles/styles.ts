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
    left: "calc(50%)",
    transform: "translateX(-50%)",
  },
  vidLrg: {
    width: "90%",
    position: "absolute" as "absolute",
    left: "calc(50%)",
    transform: "translateX(-50%)",
  },
  cord1: {
    left: "8%",
  },
  cord2: {
    right: "0",
    // transform: "translateY(-29rem)",
  },
  cord3: {
    // left: "-20%",
    paddingTop: "8rem",
    width: "8%",
  },
  cord4: {
    // right: "25%",
    //transform: "translateY(-69rem)",
  },
  cord6: {
    //right: "0",
    // transform: "translateY(-23rem)",
  },
  cord7: {
    left: "17%",
    // transform: "translateY(-23rem)",
  },
  cord8: {
    // right: "-4%",
    //   transform: "translateY(-23rem)",
    // paddingTop: "19rem",
  },
  arr: {
    left: "20%",
    width: "20%",
  },
  grid: {
    right: "-20%",
    width: "75%",
  },

  merch: {
    scrub: {
      width: "90%",
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
    imgOne4k: {
      maxWidth: "750px",
    },
    imgTwo: {
      maxWidth: "550px",
    },
    imgTwoLarge: {
      maxWidth: "550px",
      marginLeft: "66%",
    },
    imgTwo4k: {
      maxWidth: "1150px",
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
    marginTop: "29%",
  },
  sma: {
    height: "40vh",
    position: "relative",
    marginTop: "8rem",
  },
  scrubLrg: {
    width: "71%",
    position: "absolute",
    inset: "0",
    margin: "auto",
    filter: "brightness(20%)",
    // transform: "translateY(-3rem)",
    paddingBottom: "8rem",
  },
  scrub: {
    width: "100%",
    position: "absolute",
    inset: "0",
    margin: "auto",
    filter: "brightness(20%)",
    // needed to center on mobile
    transform: "translateX(-50%) translateY(-110%)",
  },
  quote: {
    fontSize: "40px",
    lineHeight: "1.28",
    padding: "0 4rem",
  },
  quote4k: {
    fontSize: "70px",
    lineHeight: "1.28",
    padding: "0 4rem",
  },
  motiv: {
    fontSize: "35px",
    padding: "3rem 0",
  },
  motivLrg: {
    fontSize: "107px",
    padding: "8.5rem 0",
  },
  motiv4k: {
    fontSize: "180px",
    padding: "10rem 0",
  },
  boltOne: {
    //transform: "translateX(-1900%)",
    left: "-16%",
    fontSize: "120px",
    transform: "translateY(-29rem)",
  },
  boltTwo: {
    right: "0",
    transform: "translateY(-43rem)",
  },
  boltThr: {
    transform: "translateX(600%) translateY(-70rem)",
  },
};

export const show: style = {
  lrg: {
    marginTop: "39%",
    position: "relative",
  },
  scrubLrg: {
    position: "absolute",
    inset: "0",
    margin: "auto",
    transform: "translateY(-10rem)",
  },
  scrub: {
    position: "absolute",
    inset: "0",
    margin: "auto",
  },
  img: {
    width: "80%",
  },
  flake: {
    // this is for the merch section
    right: "0",
    transform: "translateY(18rem)",
  },
};

export const part: style = {
  space: {
    paddingTop: "9rem",
  },
  spaceLrg: {
    paddingTop: "33%",
  },
  img: {
    width: "120px",
    padding: "1rem",
  },
  imgLrg: {
    width: "150px",
    padding: "1.4rem",
  },
  img4k: {
    width: "220px",
    padding: "1.8rem",
  },
  partners: {
    maxWidth: "700px",
  },
  partners4k: {
    maxWidth: "1200px",
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
  text4k: {
    fontSize: "80px",
    paddingBottom: "5rem",
  },
};

export const foot: style = {
  lrg: {
    paddingTop: "16%",
  },
  socials: {
    fontSize: "23px",
    paddingTop: "28.8%",
  },
  socialsLrg: {
    fontSize: "29px",
    paddingTop: "29.9%",
  },
  socials4k: {
    fontSize: "49px",
    paddingTop: "30.22%",
  },
  circle4k: {
    display: "inline-block",
    border: "1px solid #444",
    borderRadius: "50%",
    width: "120px",
    height: "120px",
    margin: "1.2rem",
    transition: "0.4s ease",
  },
  circleLrg: {
    display: "inline-block",
    border: "1px solid #444",
    borderRadius: "50%",
    width: "70px",
    height: "70px",
    margin: "0.7rem",
    transition: "0.4s ease",
  },
  circle: {
    display: "inline-block",
    border: "1px solid #444",
    borderRadius: "50%",
    width: "52px",
    height: "52px",
    margin: "0.4rem",
    transition: "0.4s ease",
  },
  hov: {
    border: "1px solid #fff",
    cursor: "pointer",
    borderRadius: "50%",
    width: "70px",
    height: "70px",
    margin: "0.7rem",
    display: "inline-block",
    transition: "0.4s ease",
  },
  cpy: {
    fontSize: "12px",
    color: "#444",
    padding: "6rem 0 8%",
  },
  p: {
    display: "inline-block",
  },
};
