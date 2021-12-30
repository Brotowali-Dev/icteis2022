import JournalCard from '../../components/JournalCard';
import './Publication.css';

import { useQuery } from '@apollo/client';
import { LOAD_JOURNAL } from '../../graphql/queries';
import Loading from '../../components/Loading';

const Publication = () => {
  const { loading, data, error } = useQuery(LOAD_JOURNAL);
  if (loading) return <Loading />;
  if (error) return <h1>Error</h1>;

  console.log(data);

  return (
    <div>
      <div className='publication-hero'>
        <h1>Publication</h1>
      </div>
      <div className='publication-container' id='publicationPage'>
        <div id='publication'>
          <article>
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
        </div>

        <aside>
          <div className='menu-card'>
            <p className='sidebar-title'>fields</p>
            <nav>
              <ul>
                <li className='active'>
                  <a className='active' href='/#'>
                    Engineering
                  </a>
                </li>
                <li>
                  <a href='/#'>Computer Engineering</a>
                </li>
                <li>
                  <a href='/#'>Electrical Engineering</a>
                </li>
                <li>
                  <a href='/#'>Civil Engineering</a>
                </li>
                <li>
                  <a href='/#'>Mechanic Engineering</a>
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
