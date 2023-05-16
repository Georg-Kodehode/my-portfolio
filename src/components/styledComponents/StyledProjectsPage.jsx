import styled from "styled-components";

const StyledProjectsPage = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1rem;

  .project-single {
    width: 31.875rem;
  }
  .project-single img {
    object-fit: cover;
    box-sizing: border-box;
    border: 3px solid #47b5ff;
    border-radius: 10px;
  }

  .project-heading {
    text-align: left;
    font-weight: 400;
    font-size: 1.5rem;
    margin: 0.75rem 0;
    display: inline-block;
    text-decoration: none;
    color: #06283d;
    &:hover {
      color: #47b5ff;
    }
  }

  .project-box {
    width: 31.875rem;
    height: 18.125rem;
  }

  .project-description {
    width: 100%;
    height: 100px;
    background-color: #06283d;
    color: #dff6ff;
    letter-spacing: 1.4px;
    line-height: 1.6;
    font-size: 15px;
    overflow: scroll;
    overflow-x: hidden;
    margin: 8px 0 0 0;
    box-sizing: border-box;
    padding: 5px 15px;
    border: 2px solid black;
    border-radius: 10px;
  }

  .project-links-wrapper {
    width: 100%;
    display: flex;
    padding: 0.3125rem 0 0 0;
  }

  @media only screen and (max-width: 530px) {
    .project-single {
      width: 21.875rem;
    }
    .project-box,
    .project-single img {
      width: 21.875rem;
      height: 12.4375rem;
    }
    .project-links-wrapper {
      height: 6.375rem;
    }
  }
`;

export default StyledProjectsPage;
