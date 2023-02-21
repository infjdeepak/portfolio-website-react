import athleteSmall from "../img/athlete-small.png";
import goodtimeSmall from "../img/goodtimes-small.png";
import theracerSmall from "../img/theracer-small.png";
import styled from "styled-components";
import { Hide } from "../styles";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  pageAnimation,
  fade,
  imageAnim,
  lineAnim,
  frameAnim,
} from "../animation";
import { useScroll } from "../components/useScroll";
import ScrollUp from "../components/ScrollUp";
const OurWork = () => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();
  return (
    <Work
      variants={pageAnimation}
      initial={"hidden"}
      animate={"show"}
      exit={"exit"}
    >
      <Frame1 variants={frameAnim}></Frame1>
      <Frame2 variants={frameAnim}></Frame2>
      <Frame3 variants={frameAnim}></Frame3>
      <Frame4 variants={frameAnim}> </Frame4>

      <Movie>
        <motion.h2 variants={fade}>The Athlete</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/the-athlete">
          <Hide>
            <motion.img
              variants={imageAnim}
              src={athleteSmall}
              alt="the athlete"
            />
          </Hide>
        </Link>
      </Movie>
      <Movie
        ref={element}
        variants={fade}
        animate={controls}
        initial={"hidden"}
      >
        <motion.h2 variants={fade}>The Racer</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/the-racer">
          <Hide>
            <motion.img
              variants={imageAnim}
              src={theracerSmall}
              alt="the racer"
            />
          </Hide>
        </Link>
      </Movie>
      <Movie
        ref={element2}
        variants={fade}
        animate={controls2}
        initial={"hidden"}
      >
        <motion.h2 variants={fade}>Good Times</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/good-times">
          <Hide>
            <motion.img
              variants={imageAnim}
              src={goodtimeSmall}
              alt="good times"
            />
          </Hide>
        </Link>
      </Movie>
      <ScrollUp />
    </Work>
  );
};

//styled components
const Work = styled(motion.div)`
  padding: 0 5%;
  color: #353535;
  background: whitesmoke;
`;
const Movie = styled(motion.div)`
  min-height: 90vh;
  min-height: 90svh;
  padding: 4rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .line {
    width: 100%;
    background: #23d997;
    height: 0.4rem;
    margin: 1rem 0 4rem 0;
  }

  img {
    width: 100%;
    height: 45rem;
    object-fit: cover;
    object-position: bottom;
    transition: all 0.9s ease;
  }
`;

const Frame1 = styled(motion.div)`
  z-index: 4;
  position: fixed;
  top: 10%;
  left: 0;
  width: 100vw;
  height: 100%;
  background: lightcyan;
`;
const Frame2 = styled(Frame1)`
  background: lightgreen;
`;
const Frame3 = styled(Frame1)`
  background: lightcoral;
`;
const Frame4 = styled(Frame1)`
  background: lightsalmon;
`;
export default OurWork;
