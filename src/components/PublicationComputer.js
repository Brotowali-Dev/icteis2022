import JournalCard from './JournalCard.js';

import { useQuery } from '@apollo/client';
import { LOAD_PUBLICATION_COMPUTER } from '../graphql/queries/index';
import Loading from '../components/Loading';

const PublicationComputer = () => {
  const { loading, data, error } = useQuery(LOAD_PUBLICATION_COMPUTER);

  if (loading) return <Loading />;
  if (error) return <h1>Error</h1>;

  return (
    <article id='computer'>
      <h2 className='subTitle'>Computer Engineering</h2>
      <p className='publication-text'>
        Publication in Combined Engineering fields
      </p>
      {data.publicationsComputer.map((cat) => {
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

export default PublicationComputer;
