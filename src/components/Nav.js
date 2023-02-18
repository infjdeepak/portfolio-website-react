const Nav = () => {
  return (
    <header>
      <nav>
        <a href="/" className="logo">
          Portfolio
        </a>
        <ol className="nav-links">
          <li>
            <a href="/">About Us</a>{" "}
          </li>
          <li>
            <a href="/">Our Work</a>{" "}
          </li>
          <li>
            <a href="/">Contact Us</a>{" "}
          </li>
        </ol>
      </nav>
    </header>
  );
};

export default Nav;
