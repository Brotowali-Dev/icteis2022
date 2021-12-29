import './Fees.css';

const Fees = () => {
  return (
    <div>
      <div className='fees-hero'>
        <div className='heroContent'>
          <h1>Fees and Payment Policies</h1>
          <hr className='hr' />
          <p>
            To facilitate the submission process and the subsequent follow up
            the process, please consider the following guidelines, information,
            tips, terms, and deadlines mentioned.
          </p>
        </div>
      </div>
      <main className='fees-container'>
        <h1 className='title'>Fee Type</h1>
        {/* FEE CARD */}
        <div className='fees-flex'>
          <div className='feeCard'>
            <div className='cardHeader'>
              <div className='cardIcon'>
                <img src='/assets/presenter.svg' alt='presenterIcon' />
              </div>
              <div className='cardTitle'>
                <div className='type'>TYPE</div>
                <div className='presenter'>Presenter</div>
              </div>
            </div>
            <div className='cardBody'>
              Long Description will be here to give a overview about presenter
              type and also who should get.
            </div>
            <div className='cardFooter'>
              <div className='price'>PRICE</div>
              <span>$100</span> / paper
            </div>
          </div>

          <div className='feeCard'>
            <div className='cardHeader'>
              <div className='cardIcon'>
                <img src='/assets/nonpresenter.svg' alt='presenterIcon' />
              </div>
              <div className='cardTitle'>
                <div className='type'>TYPE</div>
                <div className='presenter'>Non-presenter</div>
              </div>
            </div>
            <div className='cardBody'>
              Long Description will be here to give a overview about presenter
              type and also who should get.
            </div>
            <div className='cardFooter'>
              <div className='price'>PRICE</div>
              <span>$50</span> / paper
            </div>
          </div>
        </div>
        {/* END FEE CARD */}

        <h1 className='title'>Payment Instruction</h1>
        {/* PAYMENT METHOD */}
        <div className='paymentProcess'>
          <div className='paymentTitle'>
            <span>1</span> Make payments based on the type of transaction
          </div>
          <div className='paymentSubTitle'>Pay via Bank Account (USD)</div>
          <div className='paymentDescription'>
            For international presenter can pay the conference fees to: <br />
            Account name: UGM ICST
            <br />
            Account number: 9888-9002-2411-1453
            <br />
            Bank name: BNI 46
            <br />
            Swift code: BNINIDJA
            <br />
            *) Please note that the bank &#8217; s account number is different
            for the international and local presenter.
          </div>
        </div>
        {/* 2 */}
        <div className='paymentProcess'>
          <div className='paymentTitle'>
            <span>2</span> Payment confirmation
          </div>
          <div className='paymentSubTitle'>Confirm your payment</div>
          <div className='paymentDescription'>
            Before confirming your payment in the confirmation form, you need to
            prepare these following items: <br />
            <ul>
              <li>
                The scanned or screenshot of your payment proof in JPG / JPEG /
                PDF format.
              </li>
              <li>Your paper ID(s). </li>
              <li>The presenter name.</li>
            </ul>
            <div className='confirmPayment'>
              After that, you can confirm your payment here:
              <a href='/#' className='confirmBtn'>
                Confirm my Payment
              </a>
            </div>
          </div>
        </div>
        {/* 3 */}
        <div className='paymentProcess'>
          <div className='paymentTitle'>
            <span>3</span> Payment verification process
          </div>
          <div className='paymentSubTitle'>
            Wait for the next 2-3 Business Day
          </div>
          <div className='paymentDescription'>
            Please make sure not to miss the date. The deadline for the payment
            confirmation is on August 24, but you will get an early-bird
            discount if you pay before August 17. If you did not pay via credit
            card in the EDAS, you do not need to click the register icon in the
            EDAS. The committee will register it for you after reviewing your
            payment.
            <div className='contact'>
              Have any questions about the the instruction?{' '}
              <a href='/#'>Contact us</a>
            </div>
          </div>
        </div>
        {/* END PAYMENT METHOD */}

        {/* TERMS AND CONDITIONS */}
        <h1 className='title'>Terms & Conditions</h1>
        <div className='fees-terms'>
          <div className='termNavigation'>
            <nav>
              <ul>
                <li>
                  <a className='active' href='/#'>
                    Registration
                  </a>
                </li>
                <li>
                  <a href='/#'>payment</a>
                </li>
                <li>
                  <a href='/#'>participant</a>
                </li>
                <li>
                  <a href='/#'>earlybid</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className='termsDescription'>
            <div id='registration'>
              <ul>
                <li>
                  The registration fee covers seminar materials, attendance of
                  all technical sessions, and publication.
                </li>
                <li>
                  The registration fee covers one participant only. Multiple
                  authors who are attending must register separately, and those
                  who are not presenting should register as a non-presenter.
                </li>
                <li>
                  A non-presenter participant can attend two selected sessions
                  only and won &#8217; t get any seminar materials. Each session
                  has limited participants.
                </li>
                <li>
                  A receipt will be generated from the payment confirmation
                  details after the your payment is verified.
                </li>
              </ul>
            </div>
            <div id='payment'>
              <ul>
                <li>
                  The registration fee covers seminar materials, attendance of
                  all technical sessions, and publication.
                </li>
                <li>
                  The registration fee covers one participant only. Multiple
                  authors who are attending must register separately, and those
                  who are not presenting should register as a non-presenter.
                </li>
                <li>
                  A non-presenter participant can attend two selected sessions
                  only and won &#8217; t get any seminar materials. Each session
                  has limited participants.
                </li>
                <li>
                  A receipt will be generated from the payment confirmation
                  details after the your payment is verified.
                </li>
              </ul>
            </div>
            <div id='participant'>
              <ul>
                <li>
                  The registration fee covers seminar materials, attendance of
                  all technical sessions, and publication.
                </li>
                <li>
                  The registration fee covers one participant only. Multiple
                  authors who are attending must register separately, and those
                  who are not presenting should register as a non-presenter.
                </li>
                <li>
                  A non-presenter participant can attend two selected sessions
                  only and won &#8217; t get any seminar materials. Each session
                  has limited participants.
                </li>
                <li>
                  A receipt will be generated from the payment confirmation
                  details after the your payment is verified.
                </li>
              </ul>
            </div>
            <div id='earlybid'>
              <ul>
                <li>
                  The registration fee covers seminar materials, attendance of
                  all technical sessions, and publication.
                </li>
                <li>
                  The registration fee covers one participant only. Multiple
                  authors who are attending must register separately, and those
                  who are not presenting should register as a non-presenter.
                </li>
                <li>
                  A non-presenter participant can attend two selected sessions
                  only and won &#8217; t get any seminar materials. Each session
                  has limited participants.
                </li>
                <li>
                  A receipt will be generated from the payment confirmation
                  details after the your payment is verified.
                </li>
              </ul>
              <div className='contact'>
                Have any questions about the the instruction?{' '}
                <a href='/#'>Contact us</a>
              </div>
            </div>
          </div>
        </div>
        {/* END TERMS AND CONDITIONS */}
      </main>
    </div>
  );
};

export default Fees;
