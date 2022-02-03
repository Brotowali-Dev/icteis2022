import React from "react";
import { useQuery } from "@apollo/client";
import { LOAD_INFO_OVERVIEW } from "../graphql/queries";
import Loading from "./Loading";

const ImportantDates = () => {
  const { loading, error, data } = useQuery(LOAD_INFO_OVERVIEW);
  if (error) return <h1>Error</h1>;
  if (loading) return <Loading />;
  const datas = data.landingPages[0];
  return (
    <div>
      <section className="dates" id="importantdates">
        <h1>Important Dates</h1>
        <p>{datas.datesDescription}</p>
        <div className="dateFlow">
          <div className="dateWidth">
            <div className="dateIconDisable">
              <img src="/assets/submission.svg" alt="submissionIcon" />
            </div>
            <div className="dateTitleDisable">Submission Deadline</div>
            <div className="dateDatesDisable">{datas.submissionDeadline}</div>
          </div>

          <div className="desktop">
            <img src="/assets/greyArrowLeft.svg" alt="arrowChevron" />
          </div>
          <div className="mobile">
            <img src="/assets/chevron-down.svg" alt="arrowChevron" />
          </div>

          <div>
            <div className="dateIcon">
              <img src="/assets/notification.svg" alt="notificationIcon" />
            </div>
            <div className="dateTitle">Notification of Acceptance</div>
            <div className="dateDates">{datas.notificationOfAcceptance}</div>
          </div>

          <div className="desktop">
            <img src="/assets/greyArrowLeft.svg" alt="arrowChevron" />
          </div>
          <div className="mobile">
            <img src="/assets/chevron-down.svg" alt="arrowChevron" />
          </div>

          <div>
            <div className="dateIcon">
              <img src="/assets/registration.svg" alt="registrationIcon" />
            </div>
            <div className="dateTitle">Registration Deadline</div>
            <div className="dateDates">{datas.registrationDeadline}</div>
          </div>

          <div className="desktop">
            <img src="/assets/greyArrowLeft.svg" alt="arrowChevron" />
          </div>
          <div className="mobile">
            <img src="/assets/chevron-down.svg" alt="arrowChevron" />
          </div>

          <div>
            <div className="dateIcon">
              <img src="/assets/conference.svg" alt="conferenceIcon" />
            </div>
            <div className="dateTitle">Conference Date</div>
            <div className="dateDates">{datas.conferenceDate}</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ImportantDates;
