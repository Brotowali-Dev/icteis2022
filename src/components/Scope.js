import React from 'react';
import { useQuery } from '@apollo/client';
import { LOAD_CALL_FOR_PAPER } from '../graphql/queries';
import Loading from './Loading';

import '../pages/Call-for-paper/Callforpaper.css';

const Scope = () => {
  const { loading, error, data } = useQuery(LOAD_CALL_FOR_PAPER);

  if (loading) return <Loading />;
  if (error) return <h1>Error</h1>;

  const datas = data.callForPapers[0];
  return (
    <div>
      {/* PUBLICATION */}
      <div className='header' style={{ background: 'none' }}>
        <h1>Topics of Interest </h1>
        <p>{datas.penjelasan}</p>
        <p>Topic Interest submission limited into :</p>
      </div>
      <section className='publications' id='frontend'>
        <h2>{datas.judul1}</h2>
        <p>{datas.deskripsi1}</p>
        {/* adding wrap */}
        <div className='flex-start gap-100 '>
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
      <div className='publications-wrapper flex gap-16'>
        <section className='publications-section' id='security'>
          <h2>{datas.judul2}</h2>
          <p>{datas.deskripsi2}</p>
          <div className='flex-start  gap-20'>
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
        <section className='publications-section' id='ai'>
          <h2>{datas.judul3}</h2>
          <p>{datas.deskripsi3}</p>
          <div className='flex-start gap-20 '>
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
      </div>
      {/* 
      <section className="publications" id="security">
        <h2>{datas.judul2}</h2>
        <p>{datas.deskripsi2}</p>
        <div className="flex  gap-100">
          <div className="col gap-16">
            <div className="links">
              <img src="/assets/check.svg" alt="check" /> {datas.it1}
            </div>
            <div className="links">
              <img src="/assets/check.svg" alt="check" /> {datas.it2}
            </div>
            <div className="links">
              <img src="/assets/check.svg" alt="check" /> {datas.it3}
            </div>
            <div className="links">
              <img src="/assets/check.svg" alt="check" /> {datas.it4}
            </div>
          </div>

          <div className="col gap-16">
            <div className="links">
              <img src="/assets/check.svg" alt="check" /> {datas.it5}
            </div>
            <div className="links">
              <img src="/assets/check.svg" alt="check" /> {datas.it6}
            </div>
            <div className="links">
              <img src="/assets/check.svg" alt="check" /> {datas.it7}
            </div>
            <div className="links">
              <img src="/assets/check.svg" alt="check" /> {datas.it8}
            </div>
          </div>
        </div>
      </section> */}

      <section className='publications' id='iot'>
        <h2>{datas.judul4}</h2>
        <p>{datas.deskripsi4}</p>
        {/* adding wrap */}
        {/* adding justify content = space between */}
        <div className='flex-start gap-100 '>
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
  );
};

export default Scope;
