import home1 from "../img/home1.png";
import styled from "styled-components";
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
          videography. <br /> Amazingly skilled individuals are available here
          to assist you in accomplishing your goal..
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
const About = styled.div`
  border: 2px solid black;
  min-height: 90vh;
  min-height: 90svh;
  width: 90%;
  margin: auto;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;
const Description = styled.div`
  flex: 2 1 30rem;
`;
const Hide = styled.div`
  border-bottom: 0.01px solid chartreuse;
`;
const Image = styled.div`
  flex: 1 1 30rem;
  border-left: 1px solid chartreuse;
  overflow: hidden;
  text-align: end;
  img {
    width: 100%;
    height: 55rem;
    object-fit: cover;
  }
`;
export default AboutSection;
