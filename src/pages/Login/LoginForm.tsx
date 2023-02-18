import styled from "styled-components";
import { useState } from "react";

const LoginForm = () => {
  const [formInput, setFormInput] = useState({
    email: "",
    password: "",
  });

  function handleLogin() {}

  return (
    <Wrapper>
      <form onSubmit={handleLogin}>
        <div>
          <Heading>
            <h3>Loging to your dashboard</h3>
            <p>Provide details to log into your account</p>
          </Heading>

          <FormInput>
            <label htmlFor="email">Email</label>
            <article>
              <div>
                <input id="email" name="email" type="email" />
                <span></span>
              </div>
            </article>
            <small className="error"></small>
          </FormInput>

          <FormInput>
            <label htmlFor="password">Password</label>
            <article>
              <div>
                <input id="password" name="password" type="text" />
                <span></span>
              </div>
            </article>
            <small className="error"></small>
          </FormInput>

          <button type="submit">Login</button>
        </div>
      </form>
    </Wrapper>
  );
};

export default LoginForm;

const Wrapper = styled.section`
  background-color: #fccbd3;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;

  form {
    max-width: 600px;
    box-shadow: 0px 4px 25px rgba(102, 102, 102, 0.2);
    border-radius: 12px;
    width: 100%;
    background-color: white;
    padding: 30px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;

    div {
      max-width: 500px;
      width: 100%;
    }
  }

  button {
    background: #1cc578;
    border-radius: 40px;
    height: 60px;
    width: 100%;
    border: none;
    outline: none;
    color: white;
    font-weight: 500;
    font-size: 1.6rem;
  }

  @media screen and (min-width: 900px) {
    width: 50%;
  }

  @media screen and (min-width: 1200px) {
    width: 55%;
  }
`;

const Heading = styled.div`
  margin-bottom: 20px;

  h3 {
    color: ${({ theme }) => theme.primaryDark};
    font-weight: 600;
    font-size: 2.4rem;
  }

  p {
    color: ${({ theme }) => theme.tertiaryDark};
    font-size: 1.6rem;
    padding: 5px 0px;
  }
`;

const FormInput = styled.div`
  width: 100%;
  margin-bottom: 20px;

  label {
    font-weight: 500;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.primaryDark};
  }

  article {
    border-radius: 12px;
    height: 60px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4px;

    div {
      display: flex;
      height: 55px;
      margin: 0 auto;
      border-radius: 8px;
      border: 1px solid ${({ theme }) => theme.primaryDark};
    }

    input {
      outline: none;
      border-radius: 8px;
      border: none;
      flex: 1;
      padding: 0px 10px;
    }
  }

  article:has(input:focus) {
    background: #f0f0f0;
  }

  small {
    color: tomato;
    height: 10px;
  }
`;
