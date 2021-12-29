import React from 'react';
// import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      <div className='footer-header'>
        <div>
          <a href='/#' className='footer-logo'>
            ICTEIS 2022
          </a>
          <div className='footer-desc'>
            International Conference of Technology & Information System
          </div>
        </div>
        <div className='footer-date'>
          23 Mar - 18 Aug 2022 | Jakarta, Indonesia (ID)
        </div>
      </div>
      <hr />
      <div className='row justify-between'>
        <div className='col'>
          <div className='footerTitle'>Conference</div>
          <a href='/#' className='footerName'>
            Call for Paper
          </a>
          <a href='/#' className='footerName'>
            Fees
          </a>
          <a href='/#' className='footerName'>
            Publication
          </a>
        </div>
        <div className='col'>
          <div className='footerTitle'>Guidelines</div>
          <a href='/#' className='footerName'>
            Abstract Guideline
          </a>
          <a href='/#' className='footerName'>
            Full Paper Guideline
          </a>
          <a href='/#' className='footerName'>
            Powerpoint Guideline
          </a>
        </div>
        <div className='col'>
          <div className='footerTitle'>Download</div>
          <a href='/#' className='links footer-name'>
            <img src='/assets/pdfdownload.svg' alt='icon' />
            All Guideline
          </a>
          <a href='/#' className='links footer-name'>
            <img src='/assets/pdfdownload.svg' alt='icon' />
            Article Preparation
          </a>
          <a href='/#' className='links footer-name'>
            <img src='/assets/pdfdownload.svg' alt='icon' />
            Paper Template
          </a>
          <a href='/#' className='links footer-name'>
            <img src='/assets/pdfdownload.svg' alt='icon' />
            Copyright Checklist
          </a>
        </div>
        <div className='col'>
          <div className='footerTitle'>Contact</div>
          <a href='/#' className='links footer-name'>
            <img src='/assets/mail.svg' alt='icon' />
            icteis@itpln.ac.id
          </a>
          <a href='/#' className='links footer-name'>
            <img src='/assets/chat.svg' alt='icon' />
            +62 810 1010 1010
          </a>
          <a href='/#' className='links footer-name'>
            <img src='/assets/web.svg' alt='icon' />
            @icteis_itpln
          </a>
          <a href='/#' className='links footer-name'>
            <img src='/assets/web.svg' alt='icon' />
            @itpln
          </a>
        </div>
      </div>
      <hr />
      <div className='footer-footer'>
        <div className='copyright'>
          Copyright © 2022 ICTEIS. All Rights Reserved
        </div>
        <div className='flex gap-48'>
          <a href='/#' className='policy'>
            Privacy Policies
          </a>
          <a href='/#' className='terms'>
            Terms & Conditions
          </a>
        </div>
      </div>
    </footer>
  );
}
