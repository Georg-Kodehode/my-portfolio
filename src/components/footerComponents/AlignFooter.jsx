import styled from "styled-components";

const AlignFooter = styled.p`
  display: flex;
  align-items: center;

  &:hover svg path,
  &:focus svg path {
    fill: #47b5ff;
  }
  &:hover span,
  &:focus span {
    color: #47b5ff;
  }
`;

export default AlignFooter;
