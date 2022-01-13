import './index.css';
import { Link } from 'react-router-dom';

import Loading from '../../components/Loading';

// Graph QL
import { useQuery } from '@apollo/client';
import { LOAD_PRESENTATION } from '../../graphql/queries';

const PresentationGuideline = () => {
  const { loading, error, data } = useQuery(LOAD_PRESENTATION);

  if (loading) return <Loading />;
  if (error) return <h1>Error</h1>;

  const datas = data.presentationGuidelines[0];

  return (
    <div>
      {/* HERO */}
      <div className='guideline-hero'>
        <div className='guideline-heroContent'>
          <h1>{datas.title}</h1>
          <hr className='hr' />
        </div>
      </div>
      {/* ENDING HERO */}

      <div className='guideline-container'>
        <div className='guideline-main'>
          <div className='left'>
            {/* Guideline Structure */}
            <div className='guideline'>
              <h2 className='titleSection'>Guidelines Structure</h2>
              <p
                className='guideline-text'
                dangerouslySetInnerHTML={{
                  __html: datas.guidelineStructure.html,
                }}
              ></p>
            </div>
            {/* End Guideline Structure */}
            {/* Submission Steps */}
            <h2 className='titleSection'>Submisson Steps</h2>
            <div className='paymentProcess'>
              <div className='paymentTitle'>
                <span>1</span> {datas.submissionStep1}
              </div>
              <div className='paymentDescription'>
                <p
                  className='guideline-text'
                  dangerouslySetInnerHTML={{
                    __html: datas.submissionStepDeksripsi1.html,
                  }}
                ></p>
                <div className='confirmPayment'>
                  After that, you can confirm your payment here:
                  <a href='/#' className='confirmBtn'>
                    Confirm my Payment
                  </a>
                </div>
              </div>
            </div>

            <div className='paymentProcess'>
              <div className='paymentTitle'>
                <span>2</span> {datas.submissionStep2}
              </div>
              {/* <div className='paymentSubTitle'>
                Wait for the next 2-3 Business Day
              </div> */}
              <div className='paymentDescription'>
                <p
                  dangerouslySetInnerHTML={{
                    __html: datas.submissionStepDeksripsi2.html,
                  }}
                ></p>
                <div className='contact'>
                  Have any questions about the the instruction?{' '}
                  <a href='/#'>Contact us</a>
                </div>
              </div>
            </div>
            {/* End Submission Steps */}

            {/* Review Process */}
            <div className='guideline'>
              <h2 className='titleSection'>Review Process</h2>
              <p
                className='guideline-text'
                dangerouslySetInnerHTML={{
                  __html: datas.reviewProcessDeskripsi.html,
                }}
              ></p>
            </div>
            {/* End Review Process */}
          </div>
          <div className='sidebar'>
            <div className='guideline-links'>
              <img src='/assets/copylink.svg' alt='copylink' /> Copy Link
            </div>
            <div className='linksTitle'>Other Guideline</div>
            <Link to='/full-paper-guideline' className='guideline-links'>
              <img src='/assets/Frame.svg' alt='copylink' /> Full Paper
            </Link>
            <Link to='/abstract-guideline' className='guideline-links mt-12'>
              <img src='/assets/abstract.svg' alt='copylink' /> Abstract
            </Link>
            <div className='linksTitle'>Download Docs</div>
            <a
              href={datas.downloadAllGuideline.url}
              className='guideline-links'
            >
              All Guideline
            </a>
            <a
              href={datas.downloadArticle.url}
              className='guideline-links mt-12'
            >
              Article Preparation
            </a>
            <a
              href={datas.downloadPaperTemplate.url}
              className='guideline-links mt-12'
            >
              Paper Template
            </a>
            <a
              href={datas.downloadCopyright.url}
              className='guideline-links mt-12'
            >
              Copyright Checklist
            </a>
          </div>
        </div>
      </div>
      {/* CARD CONTAINER */}
      <div className='cardContainer'>
        <div className='card'>
          <div className='cardContent'>
            <div className='cardTitle'>Download Presentation Guidline</div>
            <div className='cardDescription'>
              {datas.downloadAbstractGuideline}
            </div>
            <div className='guideline-flex'>
              <a href={datas.download.url} className='cardbtn'>
                Download
              </a>
              <a
                href={datas.downloadAllGuideline.url}
                className='btnDownloadAll'
              >
                Download All Guideline
              </a>
            </div>
          </div>
          <div>
            <img src='/assets/submitpaperimage.svg' alt='submitimage' />
          </div>
        </div>
      </div>
      {/* END CARD CONTAINER */}
    </div>
  );
};

export default PresentationGuideline;
