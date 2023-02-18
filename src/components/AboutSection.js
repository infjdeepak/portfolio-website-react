import home1 from "../img/home1.png";
// import styled from "styled-components";
import { About, Description, Hide, Image } from "../styles";
const AboutSection = () => {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <h2>We work to make</h2>
          </Hide>
          <Hide>
            <h2>
              your <span>dreams</span>
            </h2>
          </Hide>
          <Hide>
            <h2>come true.</h2>
          </Hide>
        </div>
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
