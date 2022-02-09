import JournalCard from './JournalCard.js';

import { useQuery } from '@apollo/client';
import { LOAD_PUBLICATION_ELECTRICAL } from '../graphql/queries/index';
import Loading from '../components/Loading';

const PublicationElectrical = () => {
  const { loading, data, error } = useQuery(LOAD_PUBLICATION_ELECTRICAL);

  if (loading) return <Loading />;
  if (error) return <h1>Error</h1>;

  return (
    <article id='electrical'>
      <h2 className='subTitle'>Electrical Engineering</h2>
      <p className='publication-text'>
        Publication in Combined Engineering fields
      </p>
      {data.publicationsElectrical.map((cat) => {
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

export default PublicationElectrical;
