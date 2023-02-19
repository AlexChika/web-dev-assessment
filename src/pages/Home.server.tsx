import styled from "styled-components";
import Content from "../components/home/Content";
import Header from "../components/home/Header.server";
import Notification from "../components/home/Notification.server";

const HomePage = () => {
  return (
    <Wrapper>
      <Header />

      <ContentWrapper>
        <Content />
        <Notification />
      </ContentWrapper>
    </Wrapper>
  );
};

export default HomePage;

const Wrapper = styled.main``;

const ContentWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: calc(100vh - 90px);
  max-width: 1440px;
  margin: 0 auto;

  @media screen and (min-width: 425px) {
    padding: 0px 30px;
  }

  @media screen and (min-width: 768px) {
    gap: 4rem;
    flex-direction: row;
  }
`;
