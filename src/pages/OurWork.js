import athleteSmall from "../img/athlete-small.png";
import goodtimeSmall from "../img/goodtimes-small.png";
import theracerSmall from "../img/theracer-small.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
const OurWork = () => {
  return (
    <Work
      variants={pageAnimation}
      initial={"hidden"}
      animate={"show"}
      exit={"exit"}
    >
      <Movie>
        <h2>The Athlete</h2>
        <div className="line"></div>
        <Link to="/work/the-athlete">
          <img src={athleteSmall} alt="the athlete" />
        </Link>
      </Movie>

      <Movie>
        <h2>The Racer</h2>
        <div className="line"></div>
        <Link to="/work/the-racer">
          <img src={theracerSmall} alt="the racer" />
        </Link>
      </Movie>

      <Movie>
        <h2>Good Times</h2>
        <div className="line"></div>
        <Link to="/work/good-times">
          <img src={goodtimeSmall} alt="good times" />
        </Link>
      </Movie>
    </Work>
  );
};

//styled components
const Work = styled(motion.div)`
  width: 90%;
  margin: auto;
`;
const Movie = styled.div`
  min-height: 90vh;
  min-height: 90svh;
  padding: 4rem 0;
  .line {
    width: 50%;
    background: #cccccc;
    height: 0.4rem;
    margin-bottom: 4rem;
  }
  img {
    width: 100%;
    height: 45rem;
    object-fit: cover;
    object-position: bottom;
    transition: all 0.9s ease;
  }
`;
const Hide = styled.div`
  overflow: hidden;
`;
export default OurWork;
