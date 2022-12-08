import styled from "styled-components";

const StyledFooter = styled.footer`
  background-color: #06283d;
  color: #dff6ff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  min-height: 6.5625rem;

  .footer-content-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
  }

  .contact-website-name-link {
    text-decoration: none;
    color: #dff6ff;
  }

  .contact-website-name {
    display: none;
  }

  @media only screen and (max-width: 990px) {
    .footer-content-wrapper {
      flex-direction: column;
    }
    .footer-content-wrapper p {
      order: 2;
    }
    .contact-separator {
      display: none;
    }
    .contact-methods {
      flex-direction: column;
      align-items: center;
    }
    .contact-website-name {
      display: inline;
      padding-left: 3px;
    }
    .contact-website-name-link {
      display: flex;
      align-items: center;
    }
    .contact-website-name-link p {
      margin: 0;
    }
  }
`;

export default StyledFooter;
