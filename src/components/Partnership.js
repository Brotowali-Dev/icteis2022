import React from 'react';
import { useQuery } from '@apollo/client';
import { LOAD_PARTNERSHIP } from '../graphql/queries';

const Partnership = () => {
  const { loading, error, data } = useQuery(LOAD_PARTNERSHIP);
  if (error) return <h1>Error Fetching Images</h1>;
  if (loading) return <h1>loading...</h1>;
  return (
    <section className='partnership'>
      <h1>Partnership</h1>
      <p>{data.partnerships[0].deskripsi}</p>
      <div className='row gap-100 partnership-wrap'>
        <div className='partnerImage'>
          <img src={data.partnerships[0].partnership1.url} alt='partnership' />
        </div>
        <div className='partnerImage'>
          <img src={data.partnerships[0].partnership2.url} alt='partnership' />
        </div>
        <div className='partnerImage'>
          <img src={data.partnerships[0].partnership3.url} alt='partnership' />
        </div>
        <div className='partnerImage'>
          <img src={data.partnerships[0].partnership4.url} alt='partnership' />
        </div>
        <div className='partnerImage'>
          <img src={data.partnerships[0].partnership5.url} alt='partnership' />
        </div>
        <div className='partnerImage'>
          <img src={data.partnerships[0].partnership6.url} alt='partnership' />
        </div>
        <div className='partnerImage'>
          <img src={data.partnerships[0].partnership7.url} alt='partnership' />
        </div>
        <div className='partnerImage'>
          <img src={data.partnerships[0].partnership8.url} alt='partnership' />
        </div>
        <div className='partnerImage'>
          <img src={data.partnerships[0].partnership9.url} alt='partnership' />
        </div>
        <div className='partnerImage'>
          <img src={data.partnerships[0].partnership10.url} alt='partnership' />
        </div>
        <div className='partnerImage'>
          <img src={data.partnerships[0].partnership10.url} alt='partnership' />
        </div>
        <div className='partnerImage'>
          <img src={data.partnerships[0].partnership10.url} alt='partnership' />
        </div>
      </div>
    </section>
  );
};

export default Partnership;
