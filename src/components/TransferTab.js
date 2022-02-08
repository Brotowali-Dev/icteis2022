import React, { useState } from "react";

const TransferTab = ({ creditCard, usd, idr }) => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const getActiveClass = (index, className) =>
    toggleState === index ? className : "";

  return (
    <div>
      <div className="transfer-tab-container">
        <ul className="tab-list">
          <li
            className={`tabs ${getActiveClass(1, "active-tabs")}`}
            onClick={() => toggleTab(1)}
          >
            Credit Card (USD)
          </li>
          <li
            className={`tabs ${getActiveClass(2, "active-tabs")}`}
            onClick={() => toggleTab(2)}
          >
            Bank Account (USD)
          </li>
          <li
            className={`tabs ${getActiveClass(3, "active-tabs")}`}
            onClick={() => toggleTab(3)}
          >
            Bank Account (IDR)
          </li>
        </ul>
      </div>

      <div className="content-container">
        <div className={`content ${getActiveClass(1, "active-content")}`}>
          <p
            dangerouslySetInnerHTML={{
              __html: creditCard,
            }}
          ></p>
        </div>
        <div className={`content ${getActiveClass(2, "active-content")}`}>
          <p
            dangerouslySetInnerHTML={{
              __html: usd,
            }}
          ></p>
        </div>
        <div className={`content ${getActiveClass(3, "active-content")}`}>
          <p
            dangerouslySetInnerHTML={{
              __html: idr,
            }}
          ></p>
        </div>
      </div>
    </div>
  );
};

export default TransferTab;
