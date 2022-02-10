/* eslint-disable jsx-a11y/iframe-has-title */
import './Callforpaper.css';
import { useQuery } from '@apollo/client';
import { LOAD_CALL_FOR_PAPER } from '../../graphql/queries';
import Loading from '../../components/Loading'; // eslint-disable-line
import ImportantDates from '../../components/ImportantDates'; // eslint-disable-line
import Scope from '../../components/Scope'; // eslint-disable-line
import Map from '../../components/Map'; // eslint-disable-line
const locations = require('./location.json'); // eslint-disable-line

const CallForPaper = () => {
  const { loading, error, data } = useQuery(LOAD_CALL_FOR_PAPER);

  if (loading) return <Loading />;
  if (error) return <h1>Error</h1>;

  const datas = data.callForPapers[0];

  return (
    <div>
      {/* HERO */}
      <div className='call-for-paper-hero'>
        <div className='heroContent'>
          <h1>{datas.title}</h1>
          <hr className='hr' />
        </div>
      </div>
      <ImportantDates />
      {/* SCOPE */}
      <Scope />
      {/* END SCOPE */}
      <div className='call-for-paper-container'>
        <div className='call-for-paper-flex'></div>
      </div>
      <div className='cardContainer'>
        <div className='card'>
          <div className='cardContent'>
            <div className='cardTitle'>Submit Your Paper</div>
            <div className='cardDescription'>{datas.submitYourPaper}</div>
            <a href='/#' className='cardbtn'>
              Submit Now
            </a>
          </div>
          <div>
            <img src='/assets/submitpaperimage.svg' alt='submitimage' />
          </div>
        </div>
      </div>
      <Map locations={locations} />
    </div>
  );
};

export default CallForPaper;
