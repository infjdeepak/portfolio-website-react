import styled from "styled-components";

const Nav = () => {
  return (
    <header>
      <Navbar>
        <div className="logo">
          <a href="/">Portfolio</a>
        </div>
        <ul className="nav-links">
          <li>
            <a href="/">01. About Us</a>
          </li>
          <li>
            <a href="/">02. Our Work</a>
          </li>
          <li>
            <a href="/">03. Contact Us</a>
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
  .logo {
    flex: 1;
    a {
      font-family: "Lobster", cursive;
      font-weight: 400;
      font-size: 2.5rem;
    }
  }
  .nav-links {
    flex: 1;
    display: flex;
    justify-content: space-between;
  }
`;
export default Nav;
