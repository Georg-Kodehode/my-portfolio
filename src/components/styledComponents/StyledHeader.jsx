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

  .logo{
    font-size: 2.25rem;
    text-decoration: none;
    color: #dff6ff;
  }

  .styled-ul{
    margin: 0;
    padding: 0;
    width: 70%;
    height: 100%;
    min-width: 18.75rem;
    display: flex;
    justify-content: space-between;
  }

  .styled-li{
    list-style: none;
    display: inline-block;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25%;
  }

  .styled-link{
    text-decoration: none;
    color: #dff6ff;
  }

  .styled-nav{
    width: 40.625rem;
    min-height: 3.125rem;
    display: flex;
    align-items: center;
    justify-content: right;
  }
  .navlink {
    text-decoration: none;
    color: #dff6ff;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-styling: border-box;
    &:hover,
    &:focus {
      color: #47b5ff;
    }
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

    .styled-ul{
      align-items: center;
      padding-bottom: 0.625rem;
    }

    .styled-li{
      height: 48px;
      width: unset;
    }
    .styled-li a{
      width: 100%;
      text-align: center;
      justify-content: center;
    }

    .styled-nav{
      width: unset;
    }
  }
`;

export default StyledHeader;
