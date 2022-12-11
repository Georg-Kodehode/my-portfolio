import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: #06283d;
  color: #dff6ff;
  min-height: 5rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.25rem;
  position: fixed;

  .header-content-wrapper {
    width: 80%;
    display: flex;
    justify-content: space-between;
  }

  @media only screen and (max-width: 990px) {
    position: absolute;
    .header-content-wrapper {
      flex-direction: column;
      align-items: center;
    }
    .header-content-wrapper nav {
      justify-content: center;
    }
    .header-content-wrapper ul {
      flex-direction: column;
    }
  }
`;

export default StyledHeader;
