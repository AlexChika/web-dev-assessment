import styled from "styled-components";
import HalfLeftDescription from "./HalfLeftDescription";
import LoginForm from "./LoginForm";

const LoginPage = () => {
  return (
    <Wrapper>
      <HalfLeftDescription />

      <LoginForm />
    </Wrapper>
  );
};

export default LoginPage;

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  section {
    /* border: 2px solid green; */
  }

  @media screen and (min-width: 900px) {
    flex-direction: row;
  }
`;
