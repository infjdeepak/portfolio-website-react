import home1 from "../img/home1.png";
const AboutSection = () => {
  return (
    <div className="about-section">
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>We work to make</h2>
          </div>
          <div className="hide">
            <h2>
              your <span>dreams</span>
            </h2>
          </div>
          <div className="hide">
            <h2>come true.</h2>
          </div>
        </div>
        <p>
          Get in touch with us if you have any ideas involving photography or
          videography. <br />
          Amazingly skilled individuals are available here to assist you in
          accomplishing your goal..
        </p>
        <button>Contact Us</button>
      </div>
      <div className="image">
        <img src={home1} alt="man with camera" />
      </div>
    </div>
  );
};
export default AboutSection;
