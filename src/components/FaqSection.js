import styled from "styled-components";
import { About } from "../styles";
const FaqSection = () => {
  return (
    <Faq>
      <h2 className="title">
        Any questions? <br /> <span>FAQ</span>
      </h2>
      <div className="question">
        <h4>How do i start?</h4>
        <p className="answer">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, sit.
        </p>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>What Product do you offer?</h4>
        <p className="answer">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, sit.
        </p>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>Diferent Payment Methods.</h4>
        <p className="answer">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, sit.
        </p>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>Daily Schedule.</h4>
        <p className="answer">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, sit.
        </p>
        <div className="faq-line"></div>
      </div>
    </Faq>
  );
};
const Faq = styled(About)`
  display: block;
  h2 {
    margin-bottom: 4rem;
    font-weight: lighter;
  }
  .faq-line {
    background-color: #cccccc;
    height: 0.2rem;
    margin: 2rem 0;
    width: 100%;
  }
  .question {
    padding: 1rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 4rem 0rem;
  }
`;
export default FaqSection;
