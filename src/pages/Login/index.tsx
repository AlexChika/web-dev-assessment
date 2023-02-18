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
  padding: 30px 0px;

  @media screen and (min-width: 900px) {
    flex-direction: row;
    padding: 30px;
  }
`;
