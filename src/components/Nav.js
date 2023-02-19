import styled from "styled-components";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <header>
      <Navbar>
        <div>
          <Link to="/" className="logo">
            Portfolio
          </Link>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/">1. About Us</Link>
          </li>
          <li>
            <Link to="/work">2. Our Work</Link>
          </li>
          <li>
            <Link to="/contact">3. Contact Us</Link>
          </li>
        </ul>
      </Navbar>
    </header>
  );
};
//styled components
const Navbar = styled.nav`
  min-height: 10vh;
  min-height: 10svh;
  padding: 1rem 5%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #282828;
  .logo {
    font-family: "Lobster", cursive;
    font-weight: 400;
    font-size: 2.4rem;
  }
  .nav-links {
    display: flex;
  }
  li {
    padding-left: 4rem;
  }
`;
export default Nav;
