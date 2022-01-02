import JournalCard from '../../components/JournalCard';
import './Publication.css';

import { useQuery } from '@apollo/client';
import { LOAD_JOURNAL } from '../../graphql/queries';
import Loading from '../../components/Loading';
import { useState } from 'react';
import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from 'react-scroll';

const Publication = () => {
  const { loading, data, error } = useQuery(LOAD_JOURNAL);

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index, event) => {
    setToggleState(index);
    event.preventDefault();
  };

  const getActiveClass = (index, className) =>
    toggleState === index ? className : '';

  if (loading) return <Loading />;
  if (error) return <h1>Error</h1>;

  return (
    <div>
      <div className='publication-hero'>
        <h1>Publication</h1>
      </div>
      <div className='publication-container' id='publicationPage'>
        <div id='publication'>
          <article id='engineering'>
            <h2 className='subTitle'>Combined Engineering</h2>
            <p className='publication-text'>
              Publication in Combined Engineering fields
            </p>
            {data.publications.map((cat) => {
              return (
                <JournalCard
                  judul={cat.judulJurnal}
                  gambar={cat.gambarJurnal.url}
                  hashtag={cat.hashtag}
                  tanggal={cat.tanggalPublished}
                  volume={cat.volumeJurnal}
                  deskripsi={cat.deskripsi}
                  links={cat.linkJurnal}
                  key={cat.id}
                />
              );
            })}
          </article>

          <article id='computer'>
            <h2 className='subTitle'>Computer Engineering</h2>
            <p className='publication-text'>
              Publication in Combined Engineering fields
            </p>
            {data.publications.map((cat) => {
              return (
                <JournalCard
                  judul={cat.judulJurnal}
                  gambar={cat.gambarJurnal.url}
                  hashtag={cat.hashtag}
                  tanggal={cat.tanggalPublished}
                  volume={cat.volumeJurnal}
                  deskripsi={cat.deskripsi}
                  links={cat.linkJurnal}
                  key={cat.id}
                />
              );
            })}
          </article>

          <article id='electrical'>
            <h2 className='subTitle'>Electrical Engineering</h2>
            <p className='publication-text'>
              Publication in Combined Engineering fields
            </p>
            {data.publications.map((cat) => {
              return (
                <JournalCard
                  judul={cat.judulJurnal}
                  gambar={cat.gambarJurnal.url}
                  hashtag={cat.hashtag}
                  tanggal={cat.tanggalPublished}
                  volume={cat.volumeJurnal}
                  deskripsi={cat.deskripsi}
                  links={cat.linkJurnal.url}
                  key={cat.id}
                />
              );
            })}
          </article>

          <article id='civil'>
            <h2 className='subTitle'>Civil Engineering</h2>
            <p className='publication-text'>
              Publication in Combined Engineering fields
            </p>
            {data.publications.map((cat) => {
              return (
                <JournalCard
                  judul={cat.judulJurnal}
                  gambar={cat.gambarJurnal.url}
                  hashtag={cat.hashtag}
                  tanggal={cat.tanggalPublished}
                  volume={cat.volumeJurnal}
                  deskripsi={cat.deskripsi}
                  links={cat.linkJurnal}
                  key={cat.id}
                />
              );
            })}
          </article>

          <article id='machine'>
            <h2 className='subTitle'>Machine Engineering</h2>
            <p className='publication-text'>
              Publication in Combined Engineering fields
            </p>
            {data.publications.map((cat) => {
              return (
                <JournalCard
                  judul={cat.judulJurnal}
                  gambar={cat.gambarJurnal.url}
                  hashtag={cat.hashtag}
                  tanggal={cat.tanggalPublished}
                  volume={cat.volumeJurnal}
                  deskripsi={cat.deskripsi}
                  links={cat.linkJurnal}
                  key={cat.id}
                />
              );
            })}
          </article>
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
