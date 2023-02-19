import styled from "styled-components";
import { MoneyIcon } from "../../icons";

const Header = () => {
  return (
    <Wrapper>
      <div>
        <MoneyIcon />
      </div>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.nav`
  height: 90px;
  border: 0.7px solid #dce2ea;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    max-width: 1440px;
    margin: 0 auto;
    width: 100%;
  }

  @media screen and (min-width: 425px) {
    div {
      padding: 0px 30px;
    }
  }
`;
