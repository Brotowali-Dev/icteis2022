import React from "react";
import "./Homepage.css";

// Graph QL
import { useQuery } from "@apollo/client";
import { LOAD_INFO_OVERVIEW } from "../../graphql/queries";

// Components
import Hero from "../../components/Hero";
import Partnership from "../../components/Partnership";
import Speakers from "../../components/Speakers";
import Reviewers from "../../components/Reviewers";
import ImportantDates from "../../components/ImportantDates";
// import CallForPaper from "../../components/CallForPaper";
import Loading from "../../components/Loading";
import Jumper from "../../components/Jumper";

const Homepage = () => {
  const { loading, error, data } = useQuery(LOAD_INFO_OVERVIEW);
  if (error) return <h1>Error</h1>;
  if (loading) return <Loading />;
  const datas = data.landingPages[0];
  return (
    <div className="outer-container">
      {/* HERO */}
      <Hero />
      {/* END HERO */}
      {/* JUMPER */}
      <Jumper />
      {/* INFO SECTION */}
      <div id="about" name="about">
        <section className="info">
          <div className="schedule">
            <div>
              <div className="infoTitle">schedule</div>
              <div className="infoTime">{datas.schedule}</div>
            </div>
            <img src="/assets/arrowSerongMerah.svg" alt="arflexerong" />
          </div>
          <img className="desktop" src="/assets/divider.svg" alt="divider" />
          <div className="location">
            <div>
              <div className="infoTitle">Location</div>
              <div className="infoTime">{datas.location}</div>
            </div>
            <img src="/assets/arrowSerongMerah.svg" alt="arflexerong" />
          </div>
          <img className="desktop" src="/assets/divider.svg" alt="divider" />
          <div className="organizer">
            <div>
              <div className="infoTitle">Organizer</div>
              <div className="infoTime">{datas.organizer}</div>
            </div>
            <img src="/assets/arrowSerongMerah.svg" alt="arflexerong" />
          </div>
          <div className="box">
            <img src="/assets/player.svg" alt="player" />
          </div>
        </section>
        {/* END INFO SECTION */}

        {/* OVERVIEW SECTION */}
        <section className="overview">
          <div className="about">
            <div>
              <h1 className="overview-title">Overview</h1>
              <div className="overviewTitle">About ICTEIS 2022</div>
              <div className="overviewBody">{datas.about}</div>
            </div>
            <div className="notes">
              <div className="overviewTitle">Notes from Organizer</div>
              <div className="overviewBody">{datas.notes}</div>
              <div className="quickActions">
                <div className="overviewTitle">Quick Actions</div>
                <nav>
                  <ul>
                    <li>
                      <a href="/call-for-paper">
                        <img src="/assets/callforpaper.svg" alt="icon" /> Call
                        For Paper
                      </a>
                    </li>
                    <li>
                      <a href="/#">
                        <img src="/assets/downloaddocs.svg" alt="icon" />
                        Download All Docs
                      </a>
                    </li>
                    <li>
                      <a href="/#">
                        <img src="/assets/mail.svg" alt="icon" />
                        Email Organizer
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>

          <div className="overviewImage">
            <div className="overviewImage1">
              <img
                className="overviewImage1"
                src={datas.overviewImage1.url}
                alt="gambarSatu"
              />
            </div>
            <div className="overviewImage2">
              {" "}
              <img
                className="overviewImage1"
                src={datas.overviewImage2.url}
                alt="gambarDua"
              />
            </div>
          </div>
        </section>
        {/* END OVERVIEW SECTION */}

        {/* IMPORTANT DATES SECTION */}
        <ImportantDates />
        {/* END IMPORTANT DATES SECTION */}
      </div>

      {/* CALL FOR PAPER SECTION */}
      {/* <CallForPaper /> */}
      {/* END CALL FOR PAPER SECTION */}

      {/* KEYNOTE SPEAKERS SECTION */}
      <Speakers />
      {/* END KEYNOTE SPEAKERS SECTION */}

      {/* REVIEWERS SECTION */}
      <Reviewers />
      {/* END REVIEWERS SECTION */}

      {/* PARTNERSHIP SECTION */}
      <Partnership />
      {/* END PARTNERSHIP SECTION */}
    </div>
  );
};

export default Homepage;
