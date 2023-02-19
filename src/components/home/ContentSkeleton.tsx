import styled from "styled-components";

const ContentSkeleton = () => {
  return (
    <Wrapper>
      <Header aria-hidden>
        <small></small>
        <span></span>
      </Header>

      <Ceo>
        <p></p>
        <span></span>
      </Ceo>

      <Ceo>
        <p></p>
        <span></span>
      </Ceo>
    </Wrapper>
  );
};

export default ContentSkeleton;

const Wrapper = styled.div`
  border: 1px solid #dde1e3;
  border-radius: 8px;
  width: 100%;
  margin-top: 30px;
  max-width: 600px;
  padding: 20px;

  @media screen and (min-width: 425px) {
    padding: 30px;
  }

  @media screen and (min-width: 768px) {
    margin-top: 0px;
    max-width: unset;
    min-height: calc(100vh - 130px);
  }

  @media screen and (min-width: 1200px) {
    padding-left: 100px;
    padding-top: 100px;
  }

  @keyframes skeleton {
    0% {
      background-color: ${({ theme }: { theme: ThemeType }) =>
        theme.tertiaryGray};
    }

    50% {
      background-color: ${({ theme }: { theme: ThemeType }) =>
        theme.secondaryGray};
      opacity: 0.5;
    }

    100% {
      background-color: ${({ theme }: { theme: ThemeType }) =>
        theme.tertiaryGray};
    }
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;

  small {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    animation: skeleton 2s infinite forwards linear;
  }

  span {
    margin-left: 10px;
    width: 200px;
    height: 35px;
    animation: skeleton 2s infinite forwards linear;
  }
`;

const Ceo = styled.div`
  margin-top: 30px;
  p {
    width: 100%;
    height: 15px;
    max-width: 300px;
    animation: skeleton 2s infinite forwards linear;
  }

  span {
    display: block;
    width: 100%;
    height: 15px;
    max-width: 200px;
    margin-top: 5px;
    animation: skeleton 2s infinite forwards linear;
  }
`;
