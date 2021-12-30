import './Homepage.css';

// Components
import Hero from '../../components/Hero';
import Partnership from '../../components/Partnership';

// Graph QL
import { useQuery } from '@apollo/client';
import { LOAD_INFO_OVERVIEW } from '../../graphql/queries';

const Homepage = () => {
  const { loading, error, data } = useQuery(LOAD_INFO_OVERVIEW);
  if (error) return <h1>Error</h1>;
  if (loading) return <h1>Loading</h1>;
  const datas = data.landingPages[0];
  return (
    <div>
      {/* HERO */}
      <Hero />
      {/* END HERO */}

      {/* INFO SECTION */}
      <section className='info'>
        <div className='schedule'>
          <div>
            <div className='infoTitle'>schedule</div>
            <div className='infoTime'>{datas.schedule}</div>
          </div>
          <img src='/assets/arrowSerongMerah.svg' alt='arflexerong' />
        </div>
        <img className='desktop' src='/assets/divider.svg' alt='divider' />
        <div className='location'>
          <div>
            <div className='infoTitle'>Location</div>
            <div className='infoTime'>{datas.location}</div>
          </div>
          <img src='/assets/arrowSerongMerah.svg' alt='arflexerong' />
        </div>
        <img className='desktop' src='/assets/divider.svg' alt='divider' />
        <div className='organizer'>
          <div>
            <div className='infoTitle'>Organizer</div>
            <div className='infoTime'>{datas.organizer}</div>
          </div>
          <img src='/assets/arrowSerongMerah.svg' alt='arflexerong' />
        </div>
        <div className='box'>
          <img src='/assets/player.svg' alt='player' />
        </div>
      </section>
      {/* END INFO SECTION */}

      {/* OVERVIEW SECTION */}
      <section className='overview'>
        <div className='about'>
          <div>
            <h1 className='overview-title'>Overview</h1>
            <div className='overviewTitle'>About ICTEIS 2022</div>
            <div className='overviewBody'>{datas.about}</div>
          </div>
          <div className='notes'>
            <div className='overviewTitle'>Notes from Organizer</div>
            <div className='overviewBody'>{datas.notes}</div>
            <div className='quickActions'>
              <div className='overviewTitle'>Quick Actions</div>
              <nav>
                <ul>
                  <li>
                    <a href='/#'>
                      <img src='/assets/callforpaper.svg' alt='icon' /> Call For
                      Paper
                    </a>
                  </li>
                  <li>
                    <a href='/#'>
                      <img src='/assets/downloaddocs.svg' alt='icon' />
                      Download All Docs
                    </a>
                  </li>
                  <li>
                    <a href='/#'>
                      <img src='/assets/mail.svg' alt='icon' />
                      Email Organizer
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>

        <div className='overviewImage'>
          <div className='overviewImage1'>
            <img
              className='overviewImage1'
              src={datas.overviewImage1.url}
              alt='gambarSatu'
            />
          </div>
          <div className='overviewImage2'>
            {' '}
            <img
              className='overviewImage1'
              src={datas.overviewImage2.url}
              alt='gambarDua'
            />
          </div>
        </div>
      </section>
      {/* END OVERVIEW SECTION */}

      {/* IMPORTANT DATES SECTION */}
      <section className='dates'>
        <h1>Important Dates</h1>
        <p>{datas.datesDescription}</p>
        <div className='dateFlow'>
          <div className='dateWidth'>
            <div className='dateIconDisable'>
              <img src='/assets/submission.svg' alt='submissionIcon' />
            </div>
            <div className='dateTitleDisable'>Submission Deadline</div>
            <div className='dateDatesDisable'>{datas.submissionDeadline}</div>
          </div>

          <div className='desktop'>
            <img src='/assets/greyArrowLeft.svg' alt='arrowChevron' />
          </div>
          <div className='mobile'>
            <img src='/assets/chevron-down.svg' alt='arrowChevron' />
          </div>

          <div>
            <div className='dateIcon'>
              <img src='/assets/notification.svg' alt='notificationIcon' />
            </div>
            <div className='dateTitle'>Notification of Acceptance</div>
            <div className='dateDates'>{datas.notificationOfAcceptance}</div>
          </div>

          <div className='desktop'>
            <img src='/assets/greyArrowLeft.svg' alt='arrowChevron' />
          </div>
          <div className='mobile'>
            <img src='/assets/chevron-down.svg' alt='arrowChevron' />
          </div>

          <div>
            <div className='dateIcon'>
              <img src='/assets/registration.svg' alt='registrationIcon' />
            </div>
            <div className='dateTitle'>Registration Deadline</div>
            <div className='dateDates'>{datas.registrationDeadline}</div>
          </div>

          <div className='desktop'>
            <img src='/assets/greyArrowLeft.svg' alt='arrowChevron' />
          </div>
          <div className='mobile'>
            <img src='/assets/chevron-down.svg' alt='arrowChevron' />
          </div>

          <div>
            <div className='dateIcon'>
              <img src='/assets/conference.svg' alt='conferenceIcon' />
            </div>
            <div className='dateTitle'>Conference Date</div>
            <div className='dateDates'>{datas.conferenceDate}</div>
          </div>
        </div>
      </section>
      {/* END IMPORTANT DATES SECTION */}

      {/* CALL FOR PAPER SECTION */}
      <section className='callForPaper'>
        <h1>Call for Paper</h1>

        <p>
          Held as part of the Universitas Gadjah Mada Annual Scientific
          Conferences (UASC 2021) series
        </p>

        <a href='/#' className='detailLink'>
          see detail <img src='/assets/arrowRight.svg' alt='arrowRight' />
        </a>

        <div className='flex flex-mobile gap-20 mt-48'>
          <div className='boxImage'>
            <div className='paperTitle'>Artificial Intelligence</div>
            <a href='/#' className='paperDetailLink'>
              See Detail <img src='/assets/chevron-right.svg' alt='arrow' />
            </a>
          </div>
          <div className='boxImage'>
            <div className='paperTitle'>Artificial Intelligence</div>
            <a href='/#' className='paperDetailLink'>
              See Detail
              <img src='/assets/chevron-right.svg' alt='arrow' />
            </a>
          </div>
        </div>

        <div className='flex flex-mobile mt-20 gap-20'>
          <div className='boxImage'>
            <div className='paperTitle'>Artificial Intelligence</div>
            <a href='/#' className='paperDetailLink'>
              See Detail
              <img src='/assets/chevron-right.svg' alt='arrow' />
            </a>
          </div>
          <div className='boxImage'>
            <div className='paperTitle'>Artificial Intelligence</div>
            <a href='/#' className='paperDetailLink'>
              See Detail
              <img src='/assets/chevron-right.svg' alt='arrow' />
            </a>
          </div>
          <div className='boxImage'>
            <div className='paperTitle'>Artificial Intelligence</div>
            <a href='/#' className='paperDetailLink'>
              See Detail
              <img src='/assets/chevron-right.svg' alt='arrow' />
            </a>
          </div>
        </div>
      </section>
      {/* END CALL FOR PAPER SECTION */}

      {/* KEYNOTE SPEAKERS SECTION */}
      <section className='speaker'>
        <h1>Keynote Speakers</h1>
        <p>
          The conference invited speakers to enliven plenary and parallel
          sessions from various countries.
        </p>
        <div className='flex wrap gap-20'>
          <div className='speakerCard'>
            <div className='speakerImage'>
              <img src='/assets/photo.svg' alt='speakers' />
            </div>
            <div className='speakerName'>Goerge Washington, M.Cs.</div>
            <div className='speakerFrom'>Goerge Washington, M.Cs.</div>
            <a href='/#' className='speakerDetail'>
              SEE DETAIL <img src='/assets/arrowRight.svg' alt='arrowRight' />
            </a>
          </div>

          <div className='speakerCard'>
            <div className='speakerImage'>
              <img src='/assets/photo.svg' alt='speakers' />
            </div>
            <div className='speakerName'>Goerge Washington, M.Cs.</div>
            <div className='speakerFrom'>Goerge Washington, M.Cs.</div>
            <a href='/#' className='speakerDetail'>
              SEE DETAIL <img src='/assets/arrowRight.svg' alt='arrowRight' />
            </a>
          </div>

          <div className='speakerCard'>
            <div className='speakerImage'>
              <img src='/assets/photo.svg' alt='speakers' />
            </div>
            <div className='speakerName'>Goerge Washington, M.Cs.</div>
            <div className='speakerFrom'>Goerge Washington, M.Cs.</div>
            <a href='/#' className='speakerDetail'>
              SEE DETAIL <img src='/assets/arrowRight.svg' alt='arrowRight' />
            </a>
          </div>

          <div className='speakerCard'>
            <div className='speakerImage'>
              <img src='/assets/photo.svg' alt='speakers' />
            </div>
            <div className='speakerName'>Goerge Washington, M.Cs.</div>
            <div className='speakerFrom'>Goerge Washington, M.Cs.</div>
            <a href='/#' className='speakerDetail'>
              SEE DETAIL <img src='/assets/arrowRight.svg' alt='arrowRight' />
            </a>
          </div>
        </div>
      </section>
      {/* END KEYNOTE SPEAKERS SECTION */}

      {/* REVIEWERS SECTION */}
      <section className='review'>
        <h1>Reviewers</h1>
        <p>asdwasdwasdwasdw</p>
        <div className='flex wrap gap-20'>
          <div className='speakerCard'>
            <div className='speakerImage'>
              <img src='/assets/photo.svg' alt='speakers' />
            </div>
            <div className='speakerName'>Goerge Washington, M.Cs.</div>
            <div className='speakerFrom'>Goerge Washington, M.Cs.</div>
            <a href='/#' className='speakerDetail'>
              SEE DETAIL <img src='/assets/arrowRight.svg' alt='arrowRight' />
            </a>
          </div>

          <div className='speakerCard'>
            <div className='speakerImage'>
              <img src='/assets/photo.svg' alt='speakers' />
            </div>
            <div className='speakerName'>Goerge Washington, M.Cs.</div>
            <div className='speakerFrom'>Goerge Washington, M.Cs.</div>
            <a href='/#' className='speakerDetail'>
              SEE DETAIL <img src='/assets/arrowRight.svg' alt='arrowRight' />
            </a>
          </div>

          <div className='speakerCard'>
            <div className='speakerImage'>
              <img src='/assets/photo.svg' alt='speakers' />
            </div>
            <div className='speakerName'>Goerge Washington, M.Cs.</div>
            <div className='speakerFrom'>Goerge Washington, M.Cs.</div>
            <a href='/#' className='speakerDetail'>
              SEE DETAIL <img src='/assets/arrowRight.svg' alt='arrowRight' />
            </a>
          </div>

          <div className='speakerCard'>
            <div className='speakerImage'>
              <img src='/assets/photo.svg' alt='speakers' />
            </div>
            <div className='speakerName'>Goerge Washington, M.Cs.</div>
            <div className='speakerFrom'>Goerge Washington, M.Cs.</div>
            <a href='/#' className='speakerDetail'>
              SEE DETAIL <img src='/assets/arrowRight.svg' alt='arrowRight' />
            </a>
          </div>
        </div>
        <hr />
        <div className='otherReviewers'>
          <h4>Other Reviewers</h4>
          <div className='row justify-between'>
            <div>
              <div className='name'>Goerge Washington, M.Cs.</div>
              <div className='name'>Goerge Washington, M.Cs.</div>
              <div className='name'>Goerge Washington, M.Cs.</div>
            </div>
            <div>
              <div className='name'>Goerge Washington, M.Cs.</div>
              <div className='name'>Goerge Washington, M.Cs.</div>
              <div className='name'>Goerge Washington, M.Cs.</div>
            </div>
            <div>
              <div className='name'>Tt. First Name Last Name</div>
              <div className='name'>Tt. First Name Last Name</div>
              <div className='name'>Tt. First Name Last Name</div>
            </div>
            <div>
              <div className='name'>Tt. First Name Last Name</div>
              <div className='name'>Tt. First Name Last Name</div>
              <div className='name'>Tt. First Name Last Name</div>
            </div>
          </div>
        </div>
        <h1>Comitees</h1>
        <p>chairman1</p>
        <div className='row justify-between'>
          <div>
            <div className='advisory'>Advisory Board</div>
            <div className='name'>chairman 1 2 4</div>
            <div className='name'>chairman 1 2 4</div>
            <div className='name'>chairman 1 2 4</div>
          </div>
          <div>
            <div className='comiteesTitle'>Chairman</div>
            <div className='name'>chairman1</div>
            <div className='name'>chairman1</div>
            <div className='name'>chairman1</div>
          </div>
          <div>
            <div className='comiteesTitle'>Secretary</div>
            <div className='name'>Tt. First Name Last Name</div>
            <div className='name'>Tt. First Name Last Name</div>
            <div className='name'>Tt. First Name Last Name</div>
          </div>
          <div>
            <div className='comiteesTitle'>Coordinator</div>
            <div className='name'>Tt. First Name Last Name</div>
            <div className='name'>Tt. First Name Last Name</div>
            <div className='name'>Tt. First Name Last Name</div>
          </div>
        </div>
        {/* <hr />
          <div className='row justify-between'>
            <div>
              <div className='comiteesTitle}>Advisory Board</div>
              <div className='name}>Tt. First Name Last Name</div>
              <div className='name}>Tt. First Name Last Name</div>
            </div>
            <div>
              <div className='comiteesTitle}>Chairman</div>
              <div className='name}>Tt. First Name Last Name</div>
              <div className='name}>Tt. First Name Last Name</div>
              <div className='name}>Tt. First Name Last Name</div>
            </div>
            <div>
              <div className='comiteesTitle}>Secretary</div>
              <div className='name}>Tt. First Name Last Name</div>
              <div className='name}>Tt. First Name Last Name</div>
              <div className='name}>Tt. First Name Last Name</div>
            </div>
            <div>
              <div className='comiteesTitle}>Coordinator</div>
              <div className='name}>Tt. First Name Last Name</div>
              <div className='name}>Tt. First Name Last Name</div>
            </div>
          </div> */}
      </section>
      {/* END REVIEWERS SECTION */}

      {/* PARTNERSHIP SECTION */}
      <Partnership />
      {/* END PARTNERSHIP SECTION */}
    </div>
  );
};

export default Homepage;
