import Toggle from "./Toggle";
import styled from "styled-components";
import { About } from "../styles";
import { motion, LayoutGroup } from "framer-motion";
import { fade } from "../animation";
import { useScroll } from "./useScroll";
const FaqSection = () => {
  const [element, controls] = useScroll();
  return (
    <Faq ref={element} animate={controls} variants={fade} initial={"hidden"}>
      <h2 className="title">
        Any questions? <br /> <span>FAQ</span>
      </h2>
      <LayoutGroup>
        <Toggle title="How do i start?">
          <motion.div layout className="answer">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Excepturi beatae veniam tempore vero, impedit asperiores sequi.
              Magni ullam facere delectus?
            </p>
          </motion.div>
        </Toggle>

        <Toggle title="What Product do you offer?">
          <motion.div layout className="answer">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Excepturi beatae veniam tempore vero, impedit asperiores sequi.
              Magni ullam facere delectus?
            </p>
          </motion.div>
        </Toggle>

        <Toggle title="Diferent Payment Methods.">
          <motion.div layout className="answer">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Excepturi beatae veniam tempore vero, impedit asperiores sequi.
              Magni ullam facere delectus?
            </p>
          </motion.div>
        </Toggle>

        <Toggle title="Daily Schedule.">
          <motion.div layout className="answer">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Excepturi beatae veniam tempore vero, impedit asperiores sequi.
              Magni ullam facere delectus?
            </p>
          </motion.div>
        </Toggle>
      </LayoutGroup>
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
    margin-top: 1rem;
    width: 100%;
  }
  .question {
    margin: 5rem 0;
    cursor: pointer;
  }
  .answer {
    p {
      padding: 2rem 0;
    }
  }
`;
export default FaqSection;
