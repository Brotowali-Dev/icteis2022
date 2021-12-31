import React, { useState } from 'react';

const Jumper = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index, event) => {
    setToggleState(index);
    event.preventDefault();
  };

  const getActiveClass = (index, className) =>
    toggleState === index ? className : '';

  return (
    <div className='sticky'>
      <div className='jumper-container'>
        <ul className='jumper-tab-list'>
          <li
            className={`jumper ${getActiveClass(1, 'active-jumper')}`}
            onClick={() => toggleTab(1)}
          >
            <a href='#about'>About</a>
          </li>
          <li
            className={`jumper ${getActiveClass(2, 'active-jumper')}`}
            onClick={() => toggleTab(2)}
          >
            <a href='#callforpaper'>Call For Paper</a>
          </li>
          <li
            className={`jumper ${getActiveClass(3, 'active-jumper')}`}
            onClick={() => toggleTab(3)}
          >
            <a href='#speakers'>Speakers</a>
          </li>
          <li
            className={`jumper ${getActiveClass(4, 'active-jumper')}`}
            onClick={() => toggleTab(4)}
          >
            <a href='#reviewers'>Reviewers</a>
          </li>
          <li
            className={`jumper ${getActiveClass(5, 'active-jumper')}`}
            onClick={() => toggleTab(5)}
          >
            <a href='#comitees'>Comitees</a>
          </li>
          <li
            className={`jumper ${getActiveClass(6, 'active-jumper')}`}
            onClick={() => toggleTab(6)}
          >
            <a href='#partnership'>Partnership</a>
          </li>
        </ul>
        <a href='/#' className='submit-btn'>
          Submit
        </a>
      </div>
    </div>
  );
};

export default Jumper;
