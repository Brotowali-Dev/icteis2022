import React from "react";
// import { Link } from 'react-router-dom';

// GRAPH QL
import { useQuery } from "@apollo/client";
import { LOAD_FOOTER } from "../graphql/queries";

export default function Footer() {
  const { loading, error, data } = useQuery(LOAD_FOOTER);
  if (error) return <h1>Fetching Data Error</h1>;
  if (loading) return <h1>loading...</h1>;
  return (
    <footer>
      <div className="footer-header">
        <div>
          <a href="/#" className="footer-logo">
            ICTEIS 2022
          </a>
          <div className="footer-desc">
            {/* International Conference of Technology & Information System */}
            International Conference of Technology, Energy, &amp; Information
            System
          </div>
        </div>
        <div className="footer-date">
          {data.footers[0].tanggal} | Jakarta, Indonesia (ID)
        </div>
      </div>
      <hr />
      <div className="row justify-between">
        <div className="col">
          <div className="footerTitle">Conference</div>
          <a href="/#" className="footerName">
            Call for Paper
          </a>
          <a href="/#" className="footerName">
            Fees
          </a>
          <a href="/#" className="footerName">
            Publication
          </a>
        </div>
        <div className="col">
          <div className="footerTitle">Guidelines</div>
          <a href="/#" className="footerName">
            Abstract Guideline
          </a>
          <a href="/#" className="footerName">
            Full Paper Guideline
          </a>
          <a href="/#" className="footerName">
            Powerpoint Guideline
          </a>
        </div>
        <div className="col">
          <div className="footerTitle">Download</div>
          <a
            href={data.footers[0].allGuidelinePdf.url}
            className="links footer-name"
          >
            <img src="/assets/file-pdf.svg" alt="icon" />
            All Guideline
          </a>
          <a
            href={data.footers[0].articlePreparationPdf.url}
            className="links footer-name"
          >
            <img src="/assets/file-pdf.svg" alt="icon" />
            Article Preparation
          </a>
          <a
            href={data.footers[0].paperTemplatePdf.url}
            className="links footer-name"
          >
            <img src="/assets/file-pdf.svg" alt="icon" />
            Paper Template
          </a>
          <a
            href={data.footers[0].copyrightChecklistPdf.url}
            className="links footer-name"
          >
            <img src="/assets/file-pdf.svg" alt="icon" />
            Copyright Checklist
          </a>
        </div>
        <div className="col">
          <div className="footerTitle">Contact</div>
          <a
            href={`mailto:${data.footers[0].email}`}
            className="links footer-name"
          >
            <img src="/assets/mail.svg" alt="icon" />
            {data.footers[0].email}
          </a>
          <a href="/#" className="links footer-name">
            <img src="/assets/chat.svg" alt="icon" />
            {data.footers[0].telepon}
          </a>
          <a href="/#" className="links footer-name">
            <img src="/assets/web.svg" alt="icon" />
            {data.footers[0].instagram}
          </a>
          <a href={data.footers[0].website} className="links footer-name">
            <img src="/assets/web.svg" alt="icon" />
            {data.footers[0].website}
          </a>
        </div>
      </div>
      <hr />
      <div className="footer-footer">
        <div className="copyright">
          Copyright © 2022 ICTEIS. All Rights Reserved
        </div>
        <div className="flex gap-48">
          <a href="/#" className="policy">
            Privacy Policies
          </a>
          <a href="/#" className="terms">
            Terms & Conditions
          </a>
        </div>
      </div>
    </footer>
  );
}
