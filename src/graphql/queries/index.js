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
