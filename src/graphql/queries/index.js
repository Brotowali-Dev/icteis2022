import { gql } from '@apollo/client';

export const LOAD_PARTNERSHIP = gql`
  query getPartnership {
    partnerships {
      deskripsi
      partnership1 {
        url
      }
      partnership2 {
        url
      }
      partnership3 {
        url
      }
      partnership4 {
        url
      }
      partnership5 {
        url
      }
      partnership6 {
        url
      }
      partnership7 {
        url
      }
      partnership8 {
        url
      }
      partnership9 {
        url
      }
      partnership9 {
        url
      }
      partnership10 {
        url
      }
    }
  }
`;

export const LOAD_FOOTER = gql`
  query getFooter {
    footers {
      tanggal
      email
      telepon
      instagram
      website
      allGuidelinePdf {
        url
      }
      articlePreparationPdf {
        url
      }
      paperTemplatePdf {
        url
      }
      copyrightChecklistPdf {
        url
      }
    }
  }
`;

export const LOAD_HERO = gql`
  query getHero {
    landingPages {
      heroTitle
      heroImage {
        id
        url
      }
    }
  }
`;

export const LOAD_INFO_OVERVIEW = gql`
  query getHero {
    landingPages {
      location
      organizer
      schedule
      about
      notes
      datesDescription
      submissionDeadline
      notificationOfAcceptance
      registrationDeadline
      conferenceDate
      overviewImage1 {
        id
        url
      }
      overviewImage2 {
        id
        url
      }
    }
  }
`;

export const LOAD_SPEAKER = gql`
  query getSpeaker {
    speakers {
      deskripsi
      speakerFoto1 {
        url
      }
      namaSpeaker1
      universitasSpeaker1
      linkedinSpeaker1
      speakerFoto2 {
        url
      }
      namaSpeaker2
      universitasSpeaker2
      linkedinSpeaker2
      speakerFoto3 {
        url
      }
      namaSpeaker3
      universitasSpeaker3
      linkedinSpeaker3
      speakerFoto4 {
        url
      }
      namaSpeaker4
      universitasSpeaker4
      linkedinSpeaker4
    }
  }
`;

export const LOAD_REVIEWERS = gql`
  query getReviewers {
    reviewers {
      deskripsi
      reviewerFoto1 {
        url
      }
      reviewerFoto2 {
        url
      }
      reviewerFoto3 {
        url
      }
      reviewerFoto4 {
        url
      }
      namaReviewer1
      namaReviewer2
      namaReviewer3
      namaReviewer4
      universitasReviewer1
      universitasReviewer2
      universitasReviewer3
      universitasReviewer4
      linkedinReviewer1
      linkedReviewer2
      linkedReviewer3
      linkedReviewer4
      otherReviewer1
      otherReviewer2
      otherReviewer3
      otherReviewer4
      otherReviewer5
      otherReviewer6
      otherReviewer7
      otherReviewer8
      otherReviewer9
      otherReviewer10
      otherReviewer11
      otherReviewer12
      advisoryBoard1
      advisoryBoard2
      advisoryBoard3
      chairman1
      chairman2
      chairman3
      secretary1
      secretary2
      secretary3
      coordinator1
      coordinator2
      coordinator3
    }
  }
`;

export const LOAD_CALL_FOR_PAPER_SECTION = gql`
  query getCallForPaper {
    callForPaperSections {
      deskripsi
      content1
      content2
      content3
      content4
      content5
      gambarContent1 {
        url
      }
      gambarContent2 {
        url
      }
      gambarContent3 {
        url
      }
      gambarContent4 {
        url
      }
      gambarContent5 {
        url
      }
    }
  }
`;

export const LOAD_JOURNAL = gql`
  query getPublication {
    publications {
      id
      gambarJurnal {
        url
      }
      judulJurnal
      hashtag
      deskripsi
      tanggalPublished
      volumeJurnal
      linkJurnal
    }
  }
`;
