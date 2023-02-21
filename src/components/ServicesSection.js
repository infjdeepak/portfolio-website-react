import home2 from "../img/home2.png";
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import styled from "styled-components";
import { About, Description, Image, Hide } from "../styles";
//scroll
import { useScroll } from "./useScroll";
import { fade, imageAnim, swipeAnim } from "../animation";
import { motion } from "framer-motion";
//
const ServicesSection = () => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();
  return (
    <Services
      ref={element}
      variants={fade}
      initial={"hidden"}
      animate={controls}
    >
      <Description>
        <Hide>
          <motion.h2 variants={swipeAnim} className="title">
            High <span>quality</span> service.
          </motion.h2>
        </Hide>
        <Cards>
          <Card variants={fade}>
            <div className="icon">
              <img src={clock} alt="clock icon" />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </Card>
          <Card variants={fade}>
            <div className="icon">
              <img src={money} alt="money icon" />
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </Card>
          <Card variants={fade}>
            <div className="icon">
              <img src={diaphragm} alt="diaphragm icon" />
              <h3>Pro Grade Gear</h3>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </Card>
          <Card variants={fade}>
            <div className="icon">
              <img src={teamwork} alt="teamwork icon" />
              <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </Card>
        </Cards>
      </Description>
      <Image ref={element2}>
        <motion.img
          src={home2}
          alt="camera"
          variants={imageAnim}
          animate={controls2}
          initial={"hidden"}
        />
      </Image>
    </Services>
  );
};
//styled components
const Services = styled(About)`
  .title {
    margin-bottom: 5rem;
  }
`;
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;
const Card = styled(motion.div)`
  flex: 1 1 30rem;

  .icon {
    display: flex;
    gap: 2rem;
    h3 {
      font-size: 2.5rem;
      background: #ccc;
      color: #1b1b1b;
      padding: 2rem 1rem;
    }
  }
`;
export default ServicesSection;
