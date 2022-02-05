import React from "react";

// Graph QL
import { useQuery } from "@apollo/client";
import { LOAD_REVIEWERS } from "@/graphql/queries";

export default function Reviewers() {
  const { loading, error, data } = useQuery(LOAD_REVIEWERS);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error</h1>;

  const datas = data.reviewers[0];

  return (
    <section className="review" id="reviewers">
      <h1>Reviewers</h1>
      <p>{datas.deskripsi}</p>
      <div className="flex wrap gap-20">
        <div className="speakerCard">
          <div className="speakerImage">
            <img src={datas.reviewerFoto1.url} alt="speakers" />
          </div>
          <div className="speakerName">{datas.namaReviewer1}</div>
          <div className="speakerFrom">{datas.universitasReviewer1}</div>
          <a href={datas.linkedinReviewer1} className="speakerDetail">
            SEE DETAIL <img src="/assets/arrowRight.svg" alt="arrowRight" />
          </a>
        </div>

        <div className="speakerCard">
          <div className="speakerImage">
            <img src={datas.reviewerFoto2.url} alt="speakers" />
          </div>
          <div className="speakerName">{datas.namaReviewer2}</div>
          <div className="speakerFrom">{datas.universitasReviewer2}</div>
          <a href={datas.linkedReviewer2} className="speakerDetail">
            SEE DETAIL <img src="/assets/arrowRight.svg" alt="arrowRight" />
          </a>
        </div>

        <div className="speakerCard">
          <div className="speakerImage">
            <img src={datas.reviewerFoto3.url} alt="speakers" />
          </div>
          <div className="speakerName">{datas.namaReviewer3}</div>
          <div className="speakerFrom">{datas.universitasReviewer3}</div>
          <a href={datas.linkedReviewer3} className="speakerDetail">
            SEE DETAIL <img src="/assets/arrowRight.svg" alt="arrowRight" />
          </a>
        </div>

        <div className="speakerCard">
          <div className="speakerImage">
            <img src={datas.reviewerFoto4.url} alt="speakers" />
          </div>
          <div className="speakerName">{datas.namaReviewer4}</div>
          <div className="speakerFrom">{datas.universitasReviewer4}</div>
          <a href={datas.linkedReviewer4} className="speakerDetail">
            SEE DETAIL <img src="/assets/arrowRight.svg" alt="arrowRight" />
          </a>
        </div>
      </div>
      <hr />
      <div className="otherReviewers">
        <h4>Other Reviewers</h4>
        <div className="row justify-between">
          <div>
            <div className="name">{datas.otherReviewer1}</div>
            <div className="name">{datas.otherReviewer2}</div>
            <div className="name">{datas.otherReviewer3}</div>
          </div>
          <div>
            <div className="name">{datas.otherReviewer4}</div>
            <div className="name">{datas.otherReviewer5}</div>
            <div className="name">{datas.otherReviewer6}</div>
          </div>
          <div>
            <div className="name">{datas.otherReviewer7}</div>
            <div className="name">{datas.otherReviewer8}</div>
            <div className="name">{datas.otherReviewer9}</div>
          </div>
          <div>
            <div className="name">{datas.otherReviewer10}</div>
            <div className="name">{datas.otherReviewer11}</div>
            <div className="name">{datas.otherReviewer12}</div>
          </div>
        </div>
      </div>
      <h1 id="comitees" name="comitees">
        Comitees
      </h1>
      <div className="row justify-between">
        <div>
          <div className="advisory comiteesTitle">Advisory Board</div>
          <div className="name">{datas.advisoryBoard1}</div>
          <div className="name">{datas.advisoryBoard2}</div>
          <div className="name">{datas.advisoryBoard3}</div>
        </div>
        <div>
          <div className="comiteesTitle">Chairman</div>
          <div className="name">{datas.chairman1}</div>
          <div className="name">{datas.chairman2}</div>
          <div className="name">{datas.chairman3}</div>
        </div>
        <div>
          <div className="comiteesTitle">Secretary</div>
          <div className="name">{datas.secretary1}</div>
          <div className="name">{datas.secretary2}</div>
          <div className="name">{datas.secretary3}</div>
        </div>
        <div>
          <div className="comiteesTitle">Coordinator</div>
          <div className="name">{datas.coordinator1}</div>
          <div className="name">{datas.coordinator2}</div>
          <div className="name">{datas.coordinator3}</div>
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
  );
}
