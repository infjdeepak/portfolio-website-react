import styled from "styled-components";
import { motion } from "framer-motion";
export const About = styled(motion.div)`
  min-height: 90vh;
  min-height: 90svh;
  padding: 4rem 5%;
  display: flex;
  align-items: center;
  gap: 5rem;
  position: relative;
  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;
export const Description = styled(motion.div)`
  flex: 2;
`;
export const Hide = styled.div`
  overflow: hidden;
`;
export const Image = styled.div`
  flex: 1;
  overflow: hidden;
  text-align: end;
  img {
    width: 100%;
    height: 75vh;
    object-fit: cover;
  }
`;
