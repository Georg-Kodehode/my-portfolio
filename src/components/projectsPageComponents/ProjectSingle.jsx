import styled from "styled-components";

const ProjectSingle = styled.div`
  width: 31.875rem;

  img {
    object-fit: cover;
    box-sizing: border-box;
    border: 3px solid #47b5ff;
    border-radius: 10px;
  }

  @media only screen and (max-width: 530px) {
    width: 21.875rem;
    .project-box,
    img {
      width: 21.875rem;
      height: 12.4375rem;
    }
  }
`;

export default ProjectSingle;
