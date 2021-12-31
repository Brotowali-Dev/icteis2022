import JournalCard from '../../components/JournalCard';
import './Publication.css';

import { useQuery } from '@apollo/client';
import { LOAD_JOURNAL } from '../../graphql/queries';
import Loading from '../../components/Loading';
import { useState } from 'react';

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
                  links={cat.linkJurnal}
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
                <li className={` ${getActiveClass(1, 'active')}`}>
                  <a
                    className={` ${getActiveClass(1, 'active')}`}
                    onClick={() => toggleTab(1)}
                    href='#engineering'
                  >
                    Engineering
                  </a>
                </li>
                <li className={` ${getActiveClass(2, 'active')}`}>
                  <a
                    className={` ${getActiveClass(2, 'active')}`}
                    onClick={() => toggleTab(2)}
                    href='#computer'
                  >
                    Computer Engineering
                  </a>
                </li>
                <li className={` ${getActiveClass(3, 'active')}`}>
                  <a
                    className={` ${getActiveClass(3, 'active')}`}
                    onClick={() => toggleTab(3)}
                    href='#electrical'
                  >
                    Electrical Engineering
                  </a>
                </li>
                <li className={` ${getActiveClass(4, 'active')}`}>
                  <a
                    className={` ${getActiveClass(4, 'active')}`}
                    onClick={() => toggleTab(4)}
                    href='#civil'
                  >
                    Civil Engineering
                  </a>
                </li>
                <li className={` ${getActiveClass(5, 'active')}`}>
                  <a
                    className={` ${getActiveClass(5, 'active')}`}
                    onClick={() => toggleTab(5)}
                    href='#machine'
                  >
                    Mechanic Engineering
                  </a>
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
