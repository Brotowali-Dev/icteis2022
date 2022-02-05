/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import "./Callforpaper.css";
import { useQuery } from "@apollo/client";
import { LOAD_CALL_FOR_PAPER } from "@/graphql/queries";
// import { Link } from "react-scroll";
import Loading from "@/components/Loading";
import ImportantDates from "@/components/ImportantDates";
import Scope from "@/components/Scope";
import Map from "@/components/Map";
const locations = require("./location.json");

const CallForPaper = () => {
  const { loading, error, data } = useQuery(LOAD_CALL_FOR_PAPER);
  // console.log("called here", data);

  // const [toggleState, setToggleState] = useState(1);

  // const toggleTab = (index, event) => {
  //   setToggleState(index);
  //   event.preventDefault();
  // };

  // const getActiveClass = (index, className) =>
  //   toggleState === index ? className : '';

  if (loading) return <Loading />;
  if (error) return <h1>Error</h1>;

  const datas = data.callForPapers[0];

  return (
    <div>
      {/* HERO */}
      <div className="call-for-paper-hero">
        <div className="heroContent">
          <h1>{datas.title}</h1>
          <hr className="hr" />
        </div>
      </div>
      {/* ENDING HERO */}
      {/* IMPORTAN DATES */}
      <ImportantDates />
      {/* END IMPORTANT DATES */}
      <section className="main">
        <p>{datas.penjelasan}</p>
        <div className="text">Topic Interest submission limited into :</div>
      </section>
      {/* SCOPE */}
      <Scope />
      {/* END SCOPE */}
      <div className="call-for-paper-container">
        <div className="call-for-paper-flex">
          {/* SIDEBAR */}
          {/* <aside>
            <div className="menu-card">
              <p className="sidebar-title">fields</p>
              <nav>
                <ul>
                  <li>
                    <Link
                      activeClass="active"
                      className=" "
                      to="frontend"
                      spy={true}
                      smooth={true}
                      duration={500}
                      offset={-50}
                    >
                      Front End Development
                    </Link>
                  </li>

                  <li activeClass="active">
                    <Link
                      activeClass="active"
                      className=" "
                      to="security"
                      spy={true}
                      smooth={true}
                      duration={500}
                      offset={-50}
                    >
                      Website Security
                    </Link>
                  </li>
                  <li>
                    <Link
                      activeClass="active"
                      className=" "
                      to="ai"
                      spy={true}
                      smooth={true}
                      duration={500}
                      offset={-50}
                    >
                      Artificial Intelligence
                    </Link>
                  </li>
                  <li>
                    <Link
                      activeClass="active"
                      className=" "
                      to="iot"
                      spy={true}
                      smooth={true}
                      duration={500}
                      offset={-50}
                    >
                      Internet Of Things
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </aside> */}
          {/* END SIDEBAR */}
        </div>
      </div>
      <div className="cardContainer">
        <div className="card">
          <div className="cardContent">
            <div className="cardTitle">Submit Your Paper</div>
            <div className="cardDescription">{datas.submitYourPaper}</div>
            <a href="/#" className="cardbtn">
              Submit Now
            </a>
          </div>
          <div>
            <img src="/assets/submitpaperimage.svg" alt="submitimage" />
          </div>
        </div>
      </div>
      <Map locations={locations} />
    </div>
  );
};

export default CallForPaper;
