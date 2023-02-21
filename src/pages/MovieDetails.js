import { MovieState } from "../movieState.js";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
import ScrollUp from "../components/ScrollUp";
const MovieDetails = () => {
  const url = useLocation().pathname;
  const [movies, setMovies] = useState(MovieState);
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);
    setMovie(currentMovie[0]);
  }, [movies, url]);

  return (
    <>
      {movie && (
        <Details
          variants={pageAnimation}
          initial={"hidden"}
          animate={"show"}
          exit={"exit"}
        >
          <Headline>
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt="" />
          </Headline>
          <Awards>
            {movie.awards.map((award) => (
              <Award
                title={award.title}
                description={award.description}
                key={award.title}
              />
            ))}
          </Awards>
          <DisplayImage>
            <img src={movie.secondaryImg} alt="" />
          </DisplayImage>
        </Details>
      )}
      <ScrollUp />
    </>
  );
};

//styled components
const Details = styled(motion.div)``;
const Headline = styled.div`
  min-height: 90vh;
  min-height: 90svh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    text-align: center;
    margin-bottom: 2rem;
  }
  img {
    width: 100%;
    height: 40rem;
    object-fit: cover;
    object-position: bottom;
  }
`;
const Awards = styled.div`
  min-height: 90vh;
  min-height: 90svh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 2rem 5%;
`;
const AwardStyle = styled.div`
  padding: 4rem 2rem;
  height: 26rem;
  flex: 1 1 30rem;
  .line {
    width: 100%;
    background: #23d997;
    height: 0.4rem;
    margin-top: 1rem;
  }
`;
const DisplayImage = styled.div`
  img {
    width: 100%;
    max-height: 60rem;
    object-fit: cover;
    object-position: bottom;
  }
`;
//award component
const Award = ({ title, description }) => {
  return (
    <>
      <AwardStyle>
        <h3>{title}</h3>
        <div className="line"></div>
        <p>{description}</p>
      </AwardStyle>
    </>
  );
};
export default MovieDetails;
