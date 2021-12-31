import './Fees.css';

// Graph QL
import { useQuery } from '@apollo/client';
import { LOAD_FEES } from '../../graphql/queries';
import Loading from '../../components/Loading';
import Tabs from '../../components/Tabs';
import TransferTab from '../../components/TransferTab';

const Fees = () => {
  const { loading, error, data } = useQuery(LOAD_FEES);
  if (loading) return <Loading />;
  if (error) return <h1>Error</h1>;

  const datas = data.feesPages[0];

  return (
    <div>
      <div className='fees-hero'>
        <div className='fees-heroContent'>
          <h1>{datas.title}</h1>
          <hr className='hr' />
          <p>{datas.deskripsi}</p>
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
                <div className='presenter'>{datas.type1}</div>
              </div>
            </div>
            <div className='cardBody'>{datas.deskripsiType1}</div>
            <div className='cardFooter'>
              <div className='price'>PRICE</div>
              <span>{datas.biayaType1}</span> / paper
            </div>
          </div>

          <div className='feeCard'>
            <div className='cardHeader'>
              <div className='cardIcon'>
                <img src='/assets/nonpresenter.svg' alt='presenterIcon' />
              </div>
              <div className='cardTitle'>
                <div className='type'>TYPE</div>
                <div className='presenter'>{datas.type2}</div>
              </div>
            </div>
            <div className='cardBody'>{datas.deskripsiType2}</div>
            <div className='cardFooter'>
              <div className='price'>PRICE</div>
              <span>{datas.biayaType2}</span> / paper
            </div>
          </div>
        </div>
        {/* END FEE CARD */}

        <h1 className='title'>Payment Instruction</h1>
        {/* PAYMENT METHOD */}
        <div className='paymentProcess'>
          <div className='paymentTitle'>
            <span>1</span> {datas.paymentInstruction1}
          </div>
          <div className='paymentSubTitle'>Pay via Bank Account (USD)</div>

          <div className='paymentDescription'>
            <TransferTab
              creditCard={datas.deskripsiPaymentInstruction1.html}
              usd={datas.deskripsiPaymentInstruction1.html}
              idr={datas.deskripsiPaymentInstruction1.html}
            />
          </div>
        </div>
        {/* 2 */}
        <div className='paymentProcess'>
          <div className='paymentTitle'>
            <span>2</span> {datas.paymentInstruction2}
          </div>
          <div className='paymentSubTitle'>Confirm your payment</div>
          <div className='paymentDescription'>
            <p
              dangerouslySetInnerHTML={{
                __html: datas.deskripsiPaymentInstruction2.html,
              }}
            ></p>
            <div className='confirmPayment'>
              <a href='/#' className='confirmBtn'>
                Confirm my Payment
              </a>
            </div>
          </div>
        </div>
        {/* 3 */}
        <div className='paymentProcess'>
          <div className='paymentTitle'>
            <span>3</span> {datas.paymentInstruction3}
          </div>
          {/* <div className='paymentSubTitle'>
            Wait for the next 2-3 Business Day
          </div> */}
          <div className='paymentDescription'>
            <p
              dangerouslySetInnerHTML={{
                __html: datas.deskripsiPaymentInstruction3.html,
              }}
            ></p>
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
          {/* TABS  */}
          <Tabs />
          <div className='contact'>
            Have any questions about the the instruction?{' '}
            <a href='/#'>Contact us</a>
          </div>
        </div>
        {/* END TERMS AND CONDITIONS */}
      </main>
    </div>
  );
};

export default Fees;
