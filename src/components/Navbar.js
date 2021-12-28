import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header>
      <Link to='/' className='logo'>
        <img src='/assets/logo.svg' alt='logo' />
      </Link>
      <nav>
        <ul>
          <li>
            <a href='#'>Conference</a>
          </li>
          <li>
            <Link to='/submission' className='flex gap-10'>
              Submission <img src='/assets/megaArrow.svg' alt='mega arrow' />
            </Link>
          </li>
          <li>
            <Link to='/fees'>Fees</Link>
          </li>
          <li>
            <Link to='/publication'>Publication</Link>
          </li>
        </ul>
      </nav>
      <a href='#' className='submit-btn'>
        Submit
      </a>
    </header>
  );
}
