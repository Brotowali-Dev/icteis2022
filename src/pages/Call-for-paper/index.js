import './Callforpaper.css';
import Loading from '../../components/Loading';
import { useQuery } from '@apollo/client';
import { LOAD_CALL_FOR_PAPER } from '../../graphql/queries';

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
          <p>{datas.deskripsi}</p>
        </div>
      </div>
      {/* ENDING HERO */}

      <div className='call-for-paper-container'>
        <div className='call-for-paper-flex'>
          <div className='public'>
            {/* MAIN */}
            <section className='main'>
              <p>{datas.penjelasan}</p>
              <div className='text'>
                Topic Interest submission limited into :
              </div>
            </section>
            {/* END MAIN */}
            {/* PUBLICATION */}
            <section className='publications'>
              <h2>{datas.judul1}</h2>
              <p>{datas.deskripsi1}</p>
              {/* adding wrap */}
              <div className='flex gap-100 '>
                <div className='col gap-16'>
                  <div className='links'>
                    <img src='/assets/check.svg' alt='check' /> {datas.energy1}
                  </div>
                  <div className='links'>
                    <img src='/assets/check.svg' alt='check' /> {datas.energy2}
                  </div>
                  <div className='links'>
                    <img src='/assets/check.svg' alt='check' /> {datas.energy3}
                  </div>
                  <div className='links'>
                    <img src='/assets/check.svg' alt='check' /> {datas.energy4}
                  </div>
                </div>

                <div className='col gap-16'>
                  <div className='links'>
                    <img src='/assets/check.svg' alt='check' /> {datas.energy5}
                  </div>
                  <div className='links'>
                    <img src='/assets/check.svg' alt='check' /> {datas.energy6}
                  </div>
                  <div className='links'>
                    <img src='/assets/check.svg' alt='check' /> {datas.energy7}
                  </div>
                  <div className='links'>
                    <img src='/assets/check.svg' alt='check' /> {datas.energy8}
                  </div>
                </div>
              </div>
            </section>

            <section className='publications'>
              <h2>{datas.judul2}</h2>
              <p>{datas.deskripsi2}</p>
              <div className='flex  gap-100'>
                <div className='col gap-16'>
                  <div className='links'>
                    <img src='/assets/check.svg' alt='check' /> {datas.it1}
                  </div>
                  <div className='links'>
                    <img src='/assets/check.svg' alt='check' /> {datas.it2}
                  </div>
                  <div className='links'>
                    <img src='/assets/check.svg' alt='check' /> {datas.it3}
                  </div>
                  <div className='links'>
                    <img src='/assets/check.svg' alt='check' /> {datas.it4}
                  </div>
                </div>

                <div className='col gap-16'>
                  <div className='links'>
                    <img src='/assets/check.svg' alt='check' /> {datas.it5}
                  </div>
                  <div className='links'>
                    <img src='/assets/check.svg' alt='check' /> {datas.it6}
                  </div>
                  <div className='links'>
                    <img src='/assets/check.svg' alt='check' /> {datas.it7}
                  </div>
                  <div className='links'>
                    <img src='/assets/check.svg' alt='check' /> {datas.it8}
                  </div>
                </div>
              </div>
            </section>

            <section className='publications'>
              <h2>{datas.judul3}</h2>
              <p>{datas.deskripsi3}</p>
              <div className='flex gap-100 '>
                <div className='col gap-16'>
                  <div className='links'>
                    <img src='/assets/check.svg' alt='check' /> {datas.ai1}
                  </div>
                  <div className='links'>
                    <img src='/assets/check.svg' alt='check' /> {datas.ai2}
                  </div>
                  <div className='links'>
                    <img src='/assets/check.svg' alt='check' /> {datas.ai3}
                  </div>
                  <div className='links'>
                    <img src='/assets/check.svg' alt='check' /> {datas.ai4}
                  </div>
                </div>

                <div className='col gap-16'>
                  <div className='links'>
                    <img src='/assets/check.svg' alt='check' /> {datas.ai5}
                  </div>
                  <div className='links'>
                    <img src='/assets/check.svg' alt='check' /> {datas.ai6}
                  </div>
                  <div className='links'>
                    <img src='/assets/check.svg' alt='check' /> {datas.ai7}
                  </div>
                  <div className='links'>
                    <img src='/assets/check.svg' alt='check' /> {datas.ai8}
                  </div>
                </div>
              </div>
            </section>

            <section className='publications'>
              <h2>{datas.judul4}</h2>
              <p>{datas.deskripsi4}</p>
              {/* adding wrap */}
              {/* adding justify content = space between */}
              <div className='flex gap-100 '>
                <div className='col gap-16'>
                  <div className='links'>
                    <img src='/assets/check.svg' alt='check' /> {datas.iot1}
                  </div>
                  <div className='links'>
                    <img src='/assets/check.svg' alt='check' /> {datas.iot2}
                  </div>
                  <div className='links'>
                    <img src='/assets/check.svg' alt='check' /> {datas.iot3}
                  </div>
                  <div className='links'>
                    <img src='/assets/check.svg' alt='check' /> {datas.iot4}
                  </div>
                </div>

                <div className='col gap-16'>
                  <div className='links'>
                    <img src='/assets/check.svg' alt='check' /> {datas.iot5}
                  </div>
                  <div className='links'>
                    <img src='/assets/check.svg' alt='check' /> {datas.iot6}
                  </div>
                  <div className='links'>
                    <img src='/assets/check.svg' alt='check' /> {datas.iot7}
                  </div>
                  <div className='links'>
                    <img src='/assets/check.svg' alt='check' /> {datas.iot8}
                  </div>
                </div>
              </div>
            </section>
            {/* END PUBLICATION */}
          </div>

          {/* SIDEBAR */}
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
          {/* END SIDEBAR */}
        </div>
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
    </div>
  );
};

export default CallForPaper;
