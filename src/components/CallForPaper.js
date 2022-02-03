import React from "react";

import { useQuery } from "@apollo/client";
import { LOAD_CALL_FOR_PAPER_SECTION } from "../graphql/queries";
import { Link } from "react-router-dom";

export default function CallForPaper() {
  const { loading, data, error } = useQuery(LOAD_CALL_FOR_PAPER_SECTION);
  if (error) return <h1>Error</h1>;
  if (loading) return <h1>Loading...</h1>;

  const datas = data.callForPaperSections[0];

  return (
    <section className="callForPaper" id="callforpaper">
      <h1>Call for Paper</h1>

      <p>{datas.deskripsi}</p>

      <Link to="/call-for-paper" className="detailLink">
        see detail <img src="/assets/arrowRight.svg" alt="arrowRight" />
      </Link>
      <div className="flex-ipad">
        <div className="flex flex-mobile  gap-20 mt-48">
          <div className="boxImage">
            <div className="paperTitle">{datas.content1}</div>
            <Link to="/call-for-paper" className="paperDetailLink">
              See Detail <img src="/assets/chevron-right.svg" alt="arrow" />
            </Link>
          </div>
          <div className="boxImage">
            <div className="paperTitle">{datas.content2}</div>
            <Link to="/call-for-paper" className="paperDetailLink">
              See Detail
              <img src="/assets/chevron-right.svg" alt="arrow" />
            </Link>
          </div>
        </div>

        <div className="flex flex-mobile mt-20 gap-20">
          <div className="boxImage">
            <div className="paperTitle">{datas.content3}</div>
            <Link to="/call-for-paper" className="paperDetailLink">
              See Detail
              <img src="/assets/chevron-right.svg" alt="arrow" />
            </Link>
          </div>
          <div className="boxImage">
            <div className="paperTitle">{datas.content4}</div>
            <Link to="/call-for-paper" className="paperDetailLink">
              See Detail
              <img src="/assets/chevron-right.svg" alt="arrow" />
            </Link>
          </div>
          <div className="boxImage">
            <div className="paperTitle">{datas.content5}</div>
            <Link to="/call-for-paper" className="paperDetailLink">
              See Detail
              <img src="/assets/chevron-right.svg" alt="arrow" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
