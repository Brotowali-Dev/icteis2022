import JournalCard from './JournalCard.js';

import { useQuery } from '@apollo/client';
import { LOAD_JOURNAL } from '../graphql/queries/index';
import Loading from '../components/Loading';

const PublicationEngineering = () => {
  const { loading, data, error } = useQuery(LOAD_JOURNAL);

  if (loading) return <Loading />;
  if (error) return <h1>Error</h1>;

  return (
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
  );
};

export default PublicationEngineering;
