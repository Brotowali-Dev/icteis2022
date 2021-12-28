import './Publication.css';

const Publication = () => {
  return (
    <div>
      <div className='publication-hero'>
        <h1>Publication</h1>
      </div>
      <div className='container' id='publicationPage'>
        <div id='publication'>
          <article>
            <h2 className='subTitle'>Combined Engineering</h2>
            <p className='text'>Publication in Combined Engineering fields</p>
            <div className='publicationCard'>
              <div className='cardImage'>
                <img src='/assets/publication.svg' alt='publication' />
              </div>
              <div className='publicationDescription'>
                <div>
                  <div className='publicationCardHeader'>
                    <p className='publicationTitle'>
                      Journal of Applied Computer Science & Technology
                    </p>
                    <p className='links accreditated'>
                      <img src='/assets/accreditated.svg' alt='accreditated' />{' '}
                      Accredited
                    </p>
                  </div>
                  <div className='publicationCardBody'>
                    <p className='links hashtag'>
                      <img src='/assets/hashtag.svg' alt='hashtag' /> Electrical
                      Power; Telecommunication;
                    </p>
                  </div>
                  <div className='publicationCardFooter'>
                    <p className='publicationText'>
                      Petir is published twice a year in March and September and
                      contains researches in the field of Informatics
                      Engineering.
                    </p>
                  </div>
                  <hr />
                  <div className='publicationCardHeader'>
                    <p className='currentIssue'>Current Issue</p>
                    <p className='published'>Published 23/01/2021</p>
                  </div>
                  <div className='issueVol'>
                    <p>
                      Vol 14 No 2 (2021): PETIR (Jurnal Pengkajian Dan Penerapan
                      Teknik Informatika)
                    </p>
                  </div>
                  <div className='publicationCardFooter'>
                    <a href='#' className='publicationLink'>
                      View Journal
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </article>

          <article>
            <h2 className='subTitle'>Combined Engineering</h2>
            <p className='text'>Publication in Combined Engineering fields</p>
            <div className='publicationCard'>
              <div className='cardImage'>
                <img src='/assets/publication.svg' alt='publication' />
              </div>
              <div className='publicationDescription'>
                <div>
                  <div className='publicationCardHeader'>
                    <p className='publicationTitle'>
                      Journal of Applied Computer Science & Technology
                    </p>
                    <p className='links accreditated'>
                      <img src='/assets/accreditated.svg' alt='accreditated' />{' '}
                      Accredited
                    </p>
                  </div>
                  <div className='publicationCardBody'>
                    <p className='links hashtag'>
                      <img src='/assets/hashtag.svg' alt='hashtag' /> Electrical
                      Power; Telecommunication;
                    </p>
                  </div>
                  <div className='publicationCardFooter'>
                    <p className='publicationText'>
                      Petir is published twice a year in March and September and
                      contains researches in the field of Informatics
                      Engineering.
                    </p>
                  </div>
                  <hr />
                  <div className='publicationCardHeader'>
                    <p className='currentIssue'>Current Issue</p>
                    <p className='published'>Published 23/01/2021</p>
                  </div>
                  <div className='issueVol'>
                    <p>
                      Vol 14 No 2 (2021): PETIR (Jurnal Pengkajian Dan Penerapan
                      Teknik Informatika)
                    </p>
                  </div>
                  <div className='publicationCardFooter'>
                    <a href='#' className='publicationLink'>
                      View Journal
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </article>

          <article>
            <h2 className='subTitle'>Combined Engineering</h2>
            <p className='text'>Publication in Combined Engineering fields</p>
            <div className='publicationCard'>
              <div className='cardImage'>
                <img src='/assets/publication.svg' alt='publication' />
              </div>
              <div className='publicationDescription'>
                <div>
                  <div className='publicationCardHeader'>
                    <p className='publicationTitle'>
                      Journal of Applied Computer Science & Technology
                    </p>
                    <p className='links accreditated'>
                      <img src='/assets/accreditated.svg' alt='accreditated' />{' '}
                      Accredited
                    </p>
                  </div>
                  <div className='publicationCardBody'>
                    <p className='links hashtag'>
                      <img src='/assets/hashtag.svg' alt='hashtag' /> Electrical
                      Power; Telecommunication;
                    </p>
                  </div>
                  <div className='publicationCardFooter'>
                    <p className='publicationText'>
                      Petir is published twice a year in March and September and
                      contains researches in the field of Informatics
                      Engineering.
                    </p>
                  </div>
                  <hr />
                  <div className='publicationCardHeader'>
                    <p className='currentIssue'>Current Issue</p>
                    <p className='published'>Published 23/01/2021</p>
                  </div>
                  <div className='issueVol'>
                    <p>
                      Vol 14 No 2 (2021): PETIR (Jurnal Pengkajian Dan Penerapan
                      Teknik Informatika)
                    </p>
                  </div>
                  <div className='publicationCardFooter'>
                    <a href='#' className='publicationLink'>
                      View Journal
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>

        <aside>
          <div className='menu-card'>
            <p className='sidebar-title'>fields</p>
            <nav>
              <ul>
                <li className='active'>
                  <a className='active' href='#'>
                    Engineering
                  </a>
                </li>
                <li>
                  <a href='#'>Computer Engineering</a>
                </li>
                <li>
                  <a href='#'>Electrical Engineering</a>
                </li>
                <li>
                  <a href='#'>Civil Engineering</a>
                </li>
                <li>
                  <a href='#'>Mechanic Engineering</a>
                </li>
              </ul>
            </nav>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Publication;
