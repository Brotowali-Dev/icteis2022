import React from 'react';
import { useQuery } from '@apollo/client';
import { LOAD_HERO } from '../graphql/queries';

function Hero() {
  const { loading, data, error } = useQuery(LOAD_HERO);
  if (error) return <h1>Error</h1>;
  if (loading)
    return (
      <div
        style={{ height: '100vh', width: '100vw', background: '#061237' }}
      ></div>
    );

  return (
    <section className='hero'>
      <div className='hero-text'>
        <span>the 1st</span>
        <h1>{data.landingPages[0].heroTitle}</h1>
        <div>
          <a href='/#' className='btn-primary'>
            <div className='btn-content'>
              submit paper
              <div className='btn-content-child'>
                <img src='/assets/line.svg' alt='line' />
                <img src='/assets/plus.svg' alt='plus' />
              </div>
            </div>
          </a>
        </div>
        <div>
          <a href='/#' className='btn-secondary'>
            <div className='btn-content'>
              call for paper
              <div className='btn-content-child'>
                <img src='/assets/line.svg' alt='line' />
                <img src='/assets/arrowSerong.svg' alt='plus' />
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className='image-container'>
        <img src={data.landingPages[0].heroImage.url} alt='heroSatu' />
      </div>
    </section>
  );
}

export default Hero;
