import React from "react";

const JournalCard = ({
  judul,
  gambar,
  hashtag,
  tanggal,
  volume,
  deskripsi,
  links,
}) => {
  return (
    <div className="publicationCard">
      <div className="cardImage">
        <img src={gambar} alt="publication" />
      </div>
      <div className="publicationDescription">
        <div>
          <div className="publicationCardHeader">
            <p className="publicationTitle">{judul}</p>
            <p className="links accreditated">
              <img src="/assets/accreditated.svg" alt="accreditated" />{" "}
              Accredited
            </p>
          </div>
          <div className="publicationCardBody">
            <p className="links hashtag">
              <img src="/assets/hashtag.svg" alt="hashtag" /> {hashtag}
            </p>
          </div>
          <div className="publicationCardFooter">
            <p className="publicationText">{deskripsi}</p>
          </div>
          <hr />
          <div className="publicationCardHeader">
            <p className="currentIssue">Current Issue</p>
            <p className="published">Published {tanggal}</p>
          </div>
          <div className="issueVol">
            <p>{volume}</p>
          </div>
          <div className="publicationCardFooter">
            <a href={links} className="publicationLink">
              View Journal
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JournalCard;
