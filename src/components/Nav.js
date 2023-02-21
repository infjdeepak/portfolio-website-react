import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
const Nav = () => {
  const { pathname } = useLocation();

  return (
    <Navbar>
      <div>
        <Link to="/" className="logo">
          Moonie Filter
        </Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">1. About Us</Link>
          <Line
            animate={{
              width: pathname === "/" ? "100%" : "0%",
              transition: { duration: 0.7 },
            }}
            initial={{ width: 0 }}
          />
        </li>
        <li>
          <Link to="/work">2. Our Work</Link>
          <Line
            animate={{
              width: pathname === "/work" ? "100%" : "0%",
              transition: { duration: 0.7 },
            }}
            initial={{ width: 0 }}
          />
        </li>
        <li>
          <Link to="/contact">3. Contact Us</Link>
          <Line
            animate={{
              width: pathname === "/contact" ? "100%" : "0%",
              transition: { duration: 0.7 },
            }}
            initial={{ width: 0 }}
          />
        </li>
      </ul>
    </Navbar>
  );
};
//styled components
const Navbar = styled.nav`
  min-height: 10vh;
  min-height: 10svh;
  padding: 2rem 5%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #282828;
  position: sticky;
  top: 0;
  z-index: 10;
  .logo {
    font-family: "Lobster", cursive;
    font-weight: 400;
    font-size: 2.7rem;
  }
  .nav-links {
    display: flex;
    gap: 4rem;
    a {
      font-size: 2rem;
    }
    @media screen and (max-width: 800px) {
      margin-top: 3rem;
      align-self: stretch;
      justify-content: space-between;
    }
  }
  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;
const Line = styled(motion.div)`
  height: 0.3rem;
  background: #23d997;
  width: 0;
  margin-top: 0.3rem;
`;
export default Nav;
