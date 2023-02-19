import styled from "styled-components";
import { ChangeEvent, FormEvent, useState } from "react";
import { CheckCircleIcon, EyeIcon } from "../../icons";

const LoginForm = () => {
  const [showPassword, setShowPasswod] = useState(false);
  const [formInput, setFormInput] = useState({
    email: "",
    password: "",
  });

  function handleLogin(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    let valid = true;
    const error = document.querySelector(`[data-name="button"]`);

    error!.textContent = "";

    if (formInput.email.trim().length < 3 || formInput.password.length < 3) {
      valid = false;
    }

    if (valid) {
      return;
    }

    error!.textContent = "Please input atleast three characters";
  }

  function handleFormOnchange(e: ChangeEvent<HTMLInputElement>) {
    let name = e.target.name;
    let value = e.target.value;
    const icon = e.target.nextElementSibling?.querySelector("svg");

    let error = document.querySelector(`[data-name="${name}"]`);

    setFormInput({
      ...formInput,
      [name]: value,
    });

    // reset all
    error!.textContent = "";
    icon!.classList.remove("active");

    // set error texts
    if (name === "email" && value.trim().length < 3) {
      error!.textContent = "please input a dummy email";
      return;
    }
    if (name === "password" && value.trim().length < 3) {
      error!.textContent = "please input a dummy passwoed";
      return;
    }
    icon!.classList.add("active");
  }

  function handleHidePassword(e: React.MouseEvent<HTMLSpanElement>) {
    let icon = e.currentTarget.querySelector("svg");

    if (!showPassword) {
      icon!.classList.add("show");
    } else {
      icon!.classList.remove("show");
    }

    setShowPasswod(!showPassword);
  }

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
                <input
                  onChange={handleFormOnchange}
                  value={formInput.email}
                  placeholder="youremail@example.com"
                  id="email"
                  name="email"
                  type="email"
                />
                <span>
                  <CheckCircleIcon class="icon check" color="green" />
                </span>
              </div>
            </article>
            <small data-name="email" className="error"></small>
          </FormInput>

          <FormInput>
            <label htmlFor="password">Password</label>
            <article>
              <div>
                <input
                  value={formInput.password}
                  onChange={handleFormOnchange}
                  placeholder="Enter your password"
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                />
                <span onClick={handleHidePassword}>
                  <EyeIcon class="icon eye" />
                </span>
              </div>
            </article>
            <small data-name="password" className="error"></small>
          </FormInput>

          <Button>
            <button type="submit">Login</button>
            <small data-name="button"></small>
          </Button>
        </div>
      </form>
    </Wrapper>
  );
};

export default LoginForm;

const Wrapper = styled.section`
  background-color: #fccbd3;
  padding: 0px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  order: 1;

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

  @media screen and (min-width: 900px) {
    width: 50%;
    order: 2;
  }

  @media screen and (min-width: 1200px) {
    width: 55%;
  }
`;

const Heading = styled.div`
  margin-bottom: 20px;

  h3 {
    color: ${({ theme }: { theme: ThemeType }) => theme.primaryDark};
    font-weight: 600;
    font-size: 2.4rem;
  }

  p {
    color: ${({ theme }: { theme: ThemeType }) => theme.tertiaryDark};
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
    color: ${({ theme }: { theme: ThemeType }) => theme.primaryDark};
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
      border: 1px solid
        ${({ theme }: { theme: ThemeType }) => theme.primaryDark};
    }

    input {
      outline: none;
      border-top-left-radius: 8px;
      border-bottom-left-radius: 8px;
      border: none;
      flex: 1;
      padding: 0px 10px;
      font-size: 1.6rem;
    }

    span {
      display: flex;
      background-color: white;
      align-items: center;
      border-top-right-radius: 8px;
      border-bottom-right-radius: 8px;

      .icon {
        //general icon styling
        width: 35px;
        height: 35px;
        padding: 0px 5px;
        opacity: 0;
      }

      .icon.active {
        //if icon is active
        opacity: 1;
      }

      .icon.check {
        //differet style for check icon
        width: 30px;
        height: 30px;
      }

      .icon.eye.active.show {
        //if eye icon is active and show is toggled
        color: ${({ theme }: { theme: ThemeType }) => theme.primaryDark};
      }
    }
  }

  article:has(input:focus) {
    background: #f0f0f0;
  }

  small {
    color: tomato;
    display: block;
    height: 10px;
  }
`;

const Button = styled.div`
  button {
    background: ${({ theme }: { theme: ThemeType }) => theme.primaryGreen};
    border-radius: 40px;
    height: 60px;
    width: 100%;
    border: none;
    outline: none;
    color: white;
    font-weight: 500;
    font-size: 1.6rem;
  }

  small {
    display: block;
    height: 10px;
    color: tomato;
    text-align: center;
  }
`;
