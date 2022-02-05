import React from "react";

// Graph QL
import { useQuery } from "@apollo/client";
import { LOAD_SPEAKER } from "@/graphql/queries";

export default function Speakers() {
  const { loading, error, data } = useQuery(LOAD_SPEAKER);
  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Fetching Data Error</h1>;
  const datas = data.speakers[0];

  return (
    <section className="speaker" id="speakers">
      <h1>Keynote Speakers</h1>
      <p>{datas.deskripsi}</p>
      <div className="flex wrap gap-20">
        <div className="speakerCard">
          <div className="speakerImage">
            <img src={datas.speakerFoto1.url} alt="speakers" />
          </div>
          <div className="speakerName">{datas.namaSpeaker1}</div>
          <div className="speakerFrom">{datas.universitasSpeaker1}</div>
          <a href={datas.linkedinSpeaker1} className="speakerDetail">
            SEE DETAIL <img src="/assets/arrowRight.svg" alt="arrowRight" />
          </a>
        </div>

        <div className="speakerCard">
          <div className="speakerImage">
            <img src={datas.speakerFoto2.url} alt="speakers" />
          </div>
          <div className="speakerName">{datas.namaSpeaker2}</div>
          <div className="speakerFrom">{datas.universitasSpeaker2}</div>
          <a href={datas.linkedinSpeaker2} className="speakerDetail">
            SEE DETAIL <img src="/assets/arrowRight.svg" alt="arrowRight" />
          </a>
        </div>

        <div className="speakerCard">
          <div className="speakerImage">
            <img src={datas.speakerFoto3.url} alt="speakers" />
          </div>
          <div className="speakerName">{datas.namaSpeaker3}</div>
          <div className="speakerFrom">{datas.universitasSpeaker3}</div>
          <a href={datas.linkedinSpeaker3} className="speakerDetail">
            SEE DETAIL <img src="/assets/arrowRight.svg" alt="arrowRight" />
          </a>
        </div>

        <div className="speakerCard">
          <div className="speakerImage">
            <img src={datas.speakerFoto4.url} alt="speakers" />
          </div>
          <div className="speakerName">{datas.namaSpeaker4}</div>
          <div className="speakerFrom">{datas.universitasSpeaker4}</div>
          <a href={datas.linkedinSpeaker4} className="speakerDetail">
            SEE DETAIL <img src="/assets/arrowRight.svg" alt="arrowRight" />
          </a>
        </div>
      </div>
    </section>
  );
}
