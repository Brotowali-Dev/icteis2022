import React, { useState } from 'react';

const Tabs = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const getActiveClass = (index, className) =>
    toggleState === index ? className : '';

  return (
    <div>
      <div className='tab-container'>
        <ul className='tab-list'>
          <li
            className={`tabs ${getActiveClass(1, 'active-tabs')}`}
            onClick={() => toggleTab(1)}
          >
            Registration
          </li>
          <li
            className={`tabs ${getActiveClass(2, 'active-tabs')}`}
            onClick={() => toggleTab(2)}
          >
            Payment
          </li>
          <li
            className={`tabs ${getActiveClass(3, 'active-tabs')}`}
            onClick={() => toggleTab(3)}
          >
            Participant
          </li>
          <li
            className={`tabs ${getActiveClass(4, 'active-tabs')}`}
            onClick={() => toggleTab(4)}
          >
            early bid
          </li>
        </ul>
      </div>

      <div className='content-container'>
        <div className={`content ${getActiveClass(1, 'active-content')}`}>
          <p>
            Bagian Pertama The registration fee covers one participant only.
            Multiple authors who are attending must register separately, and
            those who are not presenting should register as a non-presenter. A
            non-presenter participant can attend two selected sessions only and
            won ’ t get any seminar materials. Each session has limited
            participants. A receipt will be generated from the payment
            confirmation details after the your payment is verified.
          </p>
        </div>
        <div className={`content ${getActiveClass(2, 'active-content')}`}>
          <p>
            Bagian Kedua The registration fee covers one participant only.
            Multiple authors who are attending must register separately, and
            those who are not presenting should register as a non-presenter. A
            non-presenter participant can attend two selected sessions only and
            won ’ t get any seminar materials. Each session has limited
            participants. A receipt will be generated from the payment
            confirmation details after the your payment is verified.
          </p>
        </div>
        <div className={`content ${getActiveClass(3, 'active-content')}`}>
          <p>
            Bagian Ketiga The registration fee covers one participant only.
            Multiple authors who are attending must register separately, and
            those who are not presenting should register as a non-presenter. A
            non-presenter participant can attend two selected sessions only and
            won ’ t get any seminar materials. Each session has limited
            participants. A receipt will be generated from the payment
            confirmation details after the your payment is verified.
          </p>
        </div>
        <div className={`content ${getActiveClass(4, 'active-content')}`}>
          <p>
            Bagian Keempat The registration fee covers one participant only.
            Multiple authors who are attending must register separately, and
            those who are not presenting should register as a non-presenter. A
            non-presenter participant can attend two selected sessions only and
            won ’ t get any seminar materials. Each session has limited
            participants. A receipt will be generated from the payment
            confirmation details after the your payment is verified.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
