import './Publication.css';
import PublicationEngineering from '../../components/PublicationEngineering.js';
import PublicationComputer from '../../components/PublicationComputer';
import PublicationElectrical from '../../components/PublicationElectrical';
import PublicationCivil from '../../components/PublicationCivil';
import PublicationMachine from '../../components/PublicationMachine';

import { Link } from 'react-scroll'; // eslint-disable-line

const Publication = () => {
  return (
    <div>
      <div className='publication-hero'>
        <h1>Publication</h1>
      </div>
      <div className='publication-container' id='publicationPage'>
        <div id='publication'>
          <PublicationEngineering />
          <PublicationComputer />
          <PublicationElectrical />
          <PublicationCivil />
          <PublicationMachine />
        </div>

        <aside>
          <div className='menu-card'>
            <p className='sidebar-title'>fields</p>
            <nav>
              <ul>
                <li>
                  <Link
                    activeClass='active'
                    className=' '
                    to='engineering'
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-50}
                  >
                    Engineering
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass='active'
                    className=' '
                    to='computer'
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-50}
                  >
                    Computer Engineering
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass='active'
                    className=' '
                    to='electrical'
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-50}
                  >
                    Electrical Engineering
                  </Link>
                </li>
                <li>
                  <Link
                    className=''
                    to='civil'
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-50}
                  >
                    Civil Engineering
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass='active'
                    className=''
                    to='machine'
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-50}
                  >
                    Machine Engineering
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Publication;

// import { useQuery } from '@apollo/client';
// import { LOAD_JOURNAL } from '../../graphql/queries';
// import Loading from '../../components/Loading';
// import { useState } from 'react';

// const { loading, data, error } = useQuery(LOAD_JOURNAL);

// // const [toggleState, setToggleState] = useState(1);

// // const toggleTab = (index, event) => {
// //   setToggleState(index);
// //   event.preventDefault();
// // };

// // const getActiveClass = (index, className) =>
// //   toggleState === index ? className : '';

// if (loading) return <Loading />;
// if (error) return <h1>Error</h1>;
