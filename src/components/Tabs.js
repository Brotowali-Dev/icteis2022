import React, { useState } from "react";

const Tabs = ({ registration, payment, participant, earlyBid }) => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const getActiveClass = (index, className) =>
    toggleState === index ? className : "";

  return (
    <div>
      <div className="tab-container">
        <ul className="tab-list">
          <li
            className={`tabs ${getActiveClass(1, "active-tabs")}`}
            onClick={() => toggleTab(1)}
          >
            Registration
          </li>
          <li
            className={`tabs ${getActiveClass(2, "active-tabs")}`}
            onClick={() => toggleTab(2)}
          >
            Payment
          </li>
          <li
            className={`tabs ${getActiveClass(3, "active-tabs")}`}
            onClick={() => toggleTab(3)}
          >
            Participant
          </li>
          <li
            className={`tabs ${getActiveClass(4, "active-tabs")}`}
            onClick={() => toggleTab(4)}
          >
            early bid
          </li>
        </ul>
      </div>

      <div className="content-container">
        <div className={`content ${getActiveClass(1, "active-content")}`}>
          <p
            dangerouslySetInnerHTML={{
              __html: registration,
            }}
          ></p>
        </div>
        <div className={`content ${getActiveClass(2, "active-content")}`}>
          <p
            dangerouslySetInnerHTML={{
              __html: payment,
            }}
          ></p>
        </div>
        <div className={`content ${getActiveClass(3, "active-content")}`}>
          <p
            dangerouslySetInnerHTML={{
              __html: participant,
            }}
          ></p>
        </div>
        <div className={`content ${getActiveClass(4, "active-content")}`}>
          <p
            dangerouslySetInnerHTML={{
              __html: earlyBid,
            }}
          ></p>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
