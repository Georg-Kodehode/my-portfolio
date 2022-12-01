import styled from "styled-components";

const ProjectLink = styled.a`
  background-color: #06283d;
  color: #dff6ff;
  width: 7.5rem;
  height: 3.125rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1rem;
  box-sizing: border-box;
  border: 3px solid #ffffff;
  margin-right: 0.3125rem;
  text-decoration: none;
  &:hover,
  &:focus {
    color: #47b5ff;
    border-color: #47b5ff;
  }
`;

export default ProjectLink;
