import styled from "styled-components";
import { Hide } from "../styles";
import { motion } from "framer-motion";
import { pageAnimation, titleAnim } from "../animation";
const ContactUs = () => {
  return (
    <Contact
      variants={pageAnimation}
      initial={"hidden"}
      animate={"show"}
      exit={"exit"}
    >
      <Title>
        <Hide>
          <motion.h2 variants={titleAnim}>Get in touch.</motion.h2>
        </Hide>
      </Title>
      <Hide>
        <Social variants={titleAnim}>
          <Circle />
          <motion.h3>Send Us A Message</motion.h3>
        </Social>
      </Hide>
      <Hide>
        <Social variants={titleAnim}>
          <Circle />
          <motion.h3>Send an email.</motion.h3>
        </Social>
      </Hide>
      <Hide>
        <Social variants={titleAnim}>
          <Circle />
          <motion.h3>Social Media</motion.h3>
        </Social>
      </Hide>
    </Contact>
  );
};
//styled components
const Contact = styled(motion.div)`
  min-height: 90vh;
  min-height: 90svh;
  padding: 4rem 5%;
  background: whitesmoke;
  color: #353535;
`;
const Title = styled(motion.div)`
  margin-bottom: 4rem;
  h2 {
    font-weight: bold;
  }
`;
const Circle = styled.div`
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  background: #353535;
`;
const Social = styled(motion.div)`
  margin: 2rem;
  display: flex;
  align-items: center;
  gap: 2rem;
  h3 {
    cursor: pointer;
    font-size: 4rem;
    font-weight: 400;
  }
`;
export default ContactUs;
