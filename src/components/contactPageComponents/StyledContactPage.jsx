import styled from "styled-components";

const StyledContactPage = styled.div`
  min-height: 18.75rem;
  text-align: center;
  display: flex;
  justify-content: center;

  .contact-info-div {
    width: 50%;
    min-width: 18.75rem;
    min-height: 18.75rem;
    background-color: #06283d;
    box-sizing: border-box;
    padding: 1rem;
    border: 5px solid #47b5ff;
  }
  .contact-info-div .contact-links-wrapper {
    display: flex;
    justify-content: center;
    gap: 1rem;
  }
  .contact-info-div p {
    color: #dff6ff;
  }
  .contact-info-div a {
    display: inline-block;
    text-decoration: none;
    color: #dff6ff;
  }
  .contact-info-div span {
    padding-left: 3px;
  }
  .center-links {
    display: flex;
    align-items: center;
  }

  .center-links:hover svg path {
    fill: #47b5ff;
  }
  .center-links:hover span {
    color: #47b5ff;
  }
`;

export default StyledContactPage;
