import styled from "styled-components";
import HalfLeftDescription from "../components/login/HalfLeftDescription";
import LoginForm from "../components/login/LoginForm";

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

  @media screen and (min-width: 900px) {
    flex-direction: row;
  }
`;
