import home1 from "../img/home1.png";
// import styled from "styled-components";
import { About, Description, Hide, Image } from "../styles";
import Wave from "./Wave";
import { motion } from "framer-motion";
import { titleAnim, fade, imageAnim } from "../animation";
const AboutSection = () => {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <motion.h2 variants={titleAnim}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              your <span>dreams</span>
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>come true.</motion.h2>
          </Hide>
        </div>
        <motion.p variants={fade}>
          Get in touch with us if you have any ideas involving photography or
          videography. Amazingly skilled individuals are available here to
          assist you in accomplishing your goal..
        </motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>
      </Description>
      <Image>
        <motion.img variants={imageAnim} src={home1} alt="man with camera" />
      </Image>
      <Wave />
    </About>
  );
};
//styled components

export default AboutSection;
