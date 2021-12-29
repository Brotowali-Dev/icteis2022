import './Guideline.css';

const AbstractGuideline = () => {
  return (
    <div>
      {/* HERO */}
      <div className='guideline-hero'>
        <div className='guideline-heroContent'>
          <h1>Abstract Submission Guideline</h1>
          <hr className='hr' />
          <p>
            To facilitate the submission process and the subsequent follow up
            the process, please consider the following guidelines, information,
            tips, terms, and deadlines mentioned.
          </p>
        </div>
      </div>
      {/* ENDING HERO */}

      <div className='guideline-container'>
        <div className='guideline-main'>
          <div className='left'>
            {/* Guideline Structure */}
            <div className='guideline'>
              <h2 className='titleSection'>Guidelines Structure</h2>
              <ul>
                <li className='guideline-text'>
                  The registration fee covers seminar materials, attendance of
                  all technical sessions, and publication.
                </li>
                <li className='guideline-text'>
                  The registration fee covers one participant only. Multiple
                  authors who are attending must register separately, and those
                  who are not presenting should register as a non-presenter.
                </li>
                <li className='guideline-text'>
                  A non-presenter participant can attend two selected sessions
                  only and wont get any seminar materials. Each session has
                  limited participants.
                </li>
                <li className='guideline-text'>
                  A receipt will be generated from the payment confirmation
                  details after the your payment is verified.
                </li>
              </ul>
            </div>
            {/* End Guideline Structure */}
            {/* Submission Steps */}
            <h2 className='titleSection'>Submisson Steps</h2>
            <div className='paymentProcess'>
              <div className='paymentTitle'>
                <span>1</span> Submit Abstract
              </div>
              <div className='paymentDescription'>
                Before confirming your payment in the confirmation form, you
                need to prepare these following items: <br />
                <ul>
                  <li>
                    The scanned or screenshot of your payment proof in JPG /
                    JPEG / PDF format.
                  </li>
                  <li>Your paper ID(s). </li>
                  <li>The presenter name.</li>
                </ul>
                <div className='confirmPayment'>
                  After that, you can confirm your payment here:
                  <a href='#' className='confirmBtn'>
                    Confirm my Payment
                  </a>
                </div>
              </div>
            </div>

            <div className='paymentProcess'>
              <div className='paymentTitle'>
                <span>2</span> Submission review process
              </div>
              <div className='paymentSubTitle'>
                Wait for the next 2-3 Business Day
              </div>
              <div className='paymentDescription'>
                After submission, you will be acknowledged of the receipt of the
                abstract via an email within three working days.
                <div className='contact'>
                  Have any questions about the the instruction?{' '}
                  <a href='#'>Contact us</a>
                </div>
              </div>
            </div>
            {/* End Submission Steps */}

            {/* Review Process */}
            <div className='guideline'>
              <h2 className='titleSection'>Review Process</h2>
              <ul>
                <li className='guideline-text'>
                  Your abstract will undergo a double blind peer review by the
                  international scientific committee within two to three weeks
                  after its receipt.
                </li>
                <li className='guideline-text'>
                  Results of the abstract review will be sent to the author
                  within two weeks of submission The Conference Chair serves as
                  the head of the scientific committee and will the final
                  decision on abstracts.
                </li>
                <li className='guideline-text'>
                  Acceptance or rejections of the paper will be sent to you with
                  reviewer comments.
                </li>
                <li className='guideline-text'>
                  If revision is required, the revised abstract must be sent
                  back within a week
                </li>
              </ul>
            </div>
            {/* End Review Process */}
          </div>
          <div className='sidebar'>
            <div className='guideline-links'>
              <img src='/assets/copylink.svg' alt='copylink' /> Copy Link
            </div>
            <div className='linksTitle'>Other Guideline</div>
            <div className='guideline-links'>
              <img src='/assets/abstract.svg' alt='copylink' /> Abstract
            </div>
            <div className='guideline-links'>
              <img src='/assets/Frame.svg' alt='copylink' /> Full Paper
            </div>
            <div className='guideline-links'>
              <img src='/assets/fresentation.svg' alt='copylink' /> Presentation
            </div>
            <div className='linksTitle'>Download Docs</div>
            <div className='guideline-links'>Docs 1</div>
            <div className='guideline-links'>Docs 2</div>
            <div className='guideline-links'>Docs 3</div>
          </div>
        </div>
      </div>
      {/* CARD CONTAINER */}
      <div className='cardContainer'>
        <div className='card'>
          <div className='cardContent'>
            <div className='cardTitle'>Download Abstract Guidline</div>
            <div className='cardDescription'>
              Paper describing original work are invited in any of the areas
              below. Acceptance will be based on quality, Relevance and
              Originality. Both full research reports and work-in-progress
              repots are welcome
            </div>
            <div className='guideline-flex'>
              <div className='cardbtn'>Download</div>
              <div className='btnDownloadAll'>Download All Guideline</div>
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

export default AbstractGuideline;
