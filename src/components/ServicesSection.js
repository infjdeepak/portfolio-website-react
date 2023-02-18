import home2 from "../img/home2.png";
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import styled from "styled-components";
import { About, Description, Image } from "../styles";
const ServicesSection = () => {
  return (
    <Services>
      <Image>
        <img src={home2} alt="camera" />
      </Image>
      <Description>
        <h2 className="title">
          High <span>quality</span> service.
        </h2>
        <Cards>
          <Card>
            <div className="icon">
              <img src={clock} alt="clock icon" />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={money} alt="money icon" />
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={diaphragm} alt="diaphragm icon" />
              <h3>Pro Grade Gear</h3>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={teamwork} alt="teamwork icon" />
              <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </Card>
        </Cards>
      </Description>
    </Services>
  );
};
//styled components
const Services = styled(About)`
  .title {
    margin-bottom: 4rem;
  }
`;
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;
const Card = styled.div`
  flex: 1 1 25rem;
  .icon {
    display: flex;
    gap: 2rem;
    h3 {
      font-size: 2.5rem;
      background: #ccc;
      color: #1b1b1b;
      padding: 1rem;
    }
  }
`;
export default ServicesSection;
