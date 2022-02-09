import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isClicked, setClicked] = useState(false);
  const [isMobileDropdownClicked, setIsMobileDropdownClicked] = useState(false);

  const onDropdownClick = (e) => {
    e.preventDefault();
    setClicked(true);
  };

  const onDropdownClose = (e) => {
    e.preventDefault();
    setClicked(false);
  };

  const onMobileDropdownClick = (e) => {
    e.preventDefault();
    setIsMobileDropdownClicked(true);
  };

  const onMobileDropdownCLose = (e) => {
    e.preventDefault();
    setIsMobileDropdownClicked(false);
  };

  return (
    <div>
      <header>
        <Link to="/" className="logo">
          <img src="/assets/logo.svg" alt="logo" />
        </Link>
        <nav className="desktop">
          <ul>
            <li>
              <Link to="/call-for-paper">Call For Paper</Link>
            </li>
            <li>
              <div
                onClick={isClicked ? onDropdownClose : onDropdownClick}
                className="flex gap-10 dropdown"
              >
                Submission{" "}
                {isClicked ? (
                  <img src="/assets/megaArrow.svg" alt="megaarrow" />
                ) : (
                  <img src="/assets/megaArrow.svg" alt="megaarrow" />
                )}
              </div>
            </li>
            <li>
              <Link to="/fees">Fees</Link>
            </li>
            <li>
              <Link to="/publication">Publication</Link>
            </li>
          </ul>
        </nav>
        <a href="/#" className="submit-btn desktop">
          Submit
        </a>

        {/* MOBILE HEADER */}
        <div className="gap-10 mobile">
          {/* <div className='download'>
            <img src='/assets/pdfDownload.svg' alt='download' />
          </div> */}
          <div
            onClick={isClicked ? onDropdownClose : onDropdownClick}
            className="hamburger-menu"
          >
            {isClicked ? (
              <img src="/assets/close.svg" alt="hamburgermenu" />
            ) : (
              <img src="/assets/hamburger-menu.svg" alt="hamburgermenu" />
            )}
          </div>
        </div>
        {/* END MOBILE HEADER */}
      </header>

      {/* MOBILE MENU */}
      <div
        className={
          isClicked ? "mobile-menu mobile active" : "mobile-menu mobile"
        }
      >
        <div className="col">
          <Link to="/call-for-paper" className="p-24">
            Call For Paper
          </Link>
          <div
            onClick={
              isMobileDropdownClicked
                ? onMobileDropdownCLose
                : onMobileDropdownClick
            }
            className="flex justify-between p-24 submission"
          >
            Submission <img src="/assets/megaArrow.svg" alt="mega arrow" />
          </div>
          <div
            className={
              isMobileDropdownClicked
                ? "mobile-menu-dropdown active"
                : "mobile-menu-dropdown"
            }
          >
            {/* <div className='col'>
              <h3>Call For Paper</h3>
              <div className='disabled-link'>Computer Engineering</div>
              <div className='disabled-link'>Electrical Engineering</div>
              <div className='disabled-link'>Civil Engineering</div>
              <div className='disabled-link'>Machine Engineering</div>
              <Link to='/call-for-paper' className='see links'>
                See all <img src='/assets/arrowRight.svg' alt='redArrow' />
              </Link>
            </div> */}
            <div className="col">
              <h3>Guideline</h3>
              <Link to="/abstract-guideline">Abstract Guideline</Link>
              <Link to="full-paper-guideline">Full Paper Guideline</Link>
              <Link to="presentation-guideline">Presentation Guideline</Link>
            </div>
            <div className="col bg-grey">
              <h3>Download Docs</h3>
              <a className="links" href="/#">
                <img src="/assets/pdfdownload.svg" alt="icon" />
                All Docs
              </a>
              <a className="links" href="/#">
                <img src="/assets/pdfdownload.svg" alt="icon" />
                All Guideline
              </a>
              <a className="links" href="/#">
                <img src="/assets/pdfdownload.svg" alt="icon" />
                Article Preparation
              </a>
              <a className="links" href="/#">
                <img src="/assets/pdfdownload.svg" alt="icon" />
                Paper Template
              </a>
              <a className="links" href="/#">
                <img src="/assets/pdfdownload.svg" alt="icon" />
                Copyright Checklist
              </a>
            </div>
          </div>

          <Link to="/fees" className="p-24">
            Fees
          </Link>
          <Link to="/publication" className="p-24">
            Publication
          </Link>
          <div className="p-24">
            <a href="/#" className="btn-submit ">
              <div className="btn-content ">
                submit paper
                <div className="btn-content-child">
                  <img src="/assets/line.svg" alt="line" />
                  <img src="/assets/plus.svg" alt="plus" />
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* END MOBILE MENU */}

      <div
        onClick={onDropdownClose}
        className={isClicked ? "backdrop active" : "backdrop"}
      ></div>
      <div
        className={isClicked ? "dropdown-content active" : "dropdown-content"}
      >
        <div className="row">
          {/* <div className='col'>
            <h3>Call For Paper</h3>
            <div className='disabled-link'>Computer Engineering</div>
            <div className='disabled-link'>Electrical Engineering</div>
            <div className='disabled-link'>Civil Engineering</div>
            <div className='disabled-link'>Machine Engineering</div>
            <Link to='/call-for-paper' className='see links'>
              See all <img src='/assets/arrowRight.svg' alt='redArrow' />
            </Link>
          </div> */}
          <div className="col">
            <h3>Guideline</h3>
            <Link to="/abstract-guideline">Abstract Guideline</Link>
            <Link to="/full-paper-guideline">Full Paper Guideline</Link>
            <Link to="/presentation-guideline">Presentation Guideline</Link>
          </div>
          <div className="col bg-grey">
            <h3>Download Docs</h3>
            <a className="links" href="/#">
              <img src="/assets/file-pdf.svg" alt="icon" />
              All Docs
            </a>
            <a className="links" href="/#">
              <img src="/assets/file-pdf.svg" alt="icon" />
              All Guideline
            </a>
            <a className="links" href="/#">
              <img src="/assets/file-pdf.svg" alt="icon" />
              Article Preparation
            </a>
            <a className="links" href="/#">
              <img src="/assets/file-pdf.svg" alt="icon" />
              Paper Template
            </a>
            <a className="links" href="/#">
              <img src="/assets/file-pdf.svg" alt="icon" />
              Copyright Checklist
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
