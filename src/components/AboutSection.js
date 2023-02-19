import home1 from "../img/home1.png";
// import styled from "styled-components";
import { About, Description, Hide, Image } from "../styles";
import { motion } from "framer-motion";
const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2>
              your <span>dreams</span>
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2>come true.</motion.h2>
          </Hide>
        </motion.div>
        <p>
          Get in touch with us if you have any ideas involving photography or
          videography. Amazingly skilled individuals are available here to
          assist you in accomplishing your goal..
        </p>
        <button>Contact Us</button>
      </Description>
      <Image>
        <img src={home1} alt="man with camera" />
      </Image>
    </About>
  );
};
//styled components

export default AboutSection;
