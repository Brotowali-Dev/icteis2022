import React from "react";
import { Link } from "react-scroll";

const Jumper = () => {
  // const [toggleState, setToggleState] = useState(1);

  // const toggleTab = (index, event) => {
  //   setToggleState(index);
  //   event.preventDefault();
  // };

  // const getActiveClass = (index, className) =>
  //   toggleState === index ? className : '';

  return (
    <div className="sticky">
      <div className="jumper-container">
        <ul className="jumper-tab-list">
          <Link
            activeClass="active-jumper"
            className="jumper"
            to="about"
            spy={true}
            offset={-70}
            smooth={true}
            duration={500}
          >
            About
          </Link>

          <Link
            activeClass="active-jumper"
            className="jumper"
            to="importantdates"
            spy={true}
            smooth={true}
            duration={500}
          >
            Important Dates
          </Link>
          {/* <Link
            activeClass='active-jumper'
            className='jumper'
            to='callForPaper'
            spy={true}
            smooth={true}
            duration={500}
          >
            Call For Paper
          </Link> */}
          <Link
            activeClass="active-jumper"
            className="jumper"
            to="speakers"
            spy={true}
            smooth={true}
            duration={500}
          >
            Speakers
          </Link>
          <Link
            activeClass="active-jumper"
            className="jumper"
            to="reviewers"
            spy={true}
            smooth={true}
            duration={500}
          >
            Reviewers
          </Link>
          <Link
            activeClass="active-jumper"
            className="jumper"
            to="comitees"
            spy={true}
            offset={-90}
            smooth={true}
            duration={500}
          >
            Comitees
          </Link>
          <Link
            activeClass="active-jumper"
            className="jumper"
            to="partnership"
            spy={true}
            smooth={true}
            duration={500}
          >
            Partnership
          </Link>
        </ul>
        <a href="/#" className="submit-btn">
          Submit
        </a>
      </div>
    </div>
  );
};

export default Jumper;
