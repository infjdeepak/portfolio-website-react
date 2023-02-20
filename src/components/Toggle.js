import { useState } from "react";
import { motion } from "framer-motion";
const Toggle = ({ children, title }) => {
  const [toggleActive, setToggle] = useState(false);
  return (
    <motion.div
      layout
      className="question"
      onClick={() => setToggle(!toggleActive)}
    >
      <motion.h4 layout>{title}</motion.h4>
      {toggleActive ? children : ""}
      <div className="faq-line"></div>
    </motion.div>
  );
};
export default Toggle;
