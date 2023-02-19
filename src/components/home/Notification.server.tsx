import styled from "styled-components";
import { TimerIcon } from "../../icons";

const Notification = () => {
  return (
    <Wrapper>
      <div className="coming__soon">
        <TimerIcon />
        <span>Coming soon</span>
      </div>

      <SkeletonWrapper>
        <div>
          <p>🎉</p>

          <span>
            <small></small>
            <small></small>
          </span>
        </div>

        <div>
          <p>✨</p>

          <span>
            <small></small>
            <small></small>
          </span>
        </div>

        <div>
          <p>💥</p>

          <span>
            <small></small>
            <small></small>
          </span>
        </div>
      </SkeletonWrapper>

      <div className="info__wrapper">
        <h3>📫 Notifications</h3>

        <p>
          Receive notifcations about your rider performance, efficiency reviews
          and a lot more
        </p>
      </div>
    </Wrapper>
  );
};

export default Notification;

const Wrapper = styled.div`
  width: 100%;
  background: ${({ theme }: { theme: ThemeType }) => theme.primaryGray};
  border-radius: 12px;
  min-height: calc(100vh - 130px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 15px 30px;
  margin-top: 30px;
  max-width: 600px;

  @media screen and (min-width: 768px) {
    max-width: 400px;
    margin-top: 0px;
  }

  .coming__soon {
    display: flex;
    background: ${({ theme }: { theme: ThemeType }) => theme.tertiaryRed};
    width: max-content;
    border-radius: 30px;
    padding: 6px 16px;
    span {
      color: ${({ theme }: { theme: ThemeType }) => theme.primaryRed};
    }
  }

  .info__wrapper {
    margin-top: 30px;

    h3 {
      font-weight: 600;
      font-size: 2.4rem;
      text-align: center;
      color: ${({ theme }: { theme: ThemeType }) => theme.primaryDark};
    }

    p {
      margin-top: 10px;
      font-size: 16px;
      letter-spacing: 0.3px;
      text-align: center;
      color: ${({ theme }: { theme: ThemeType }) => theme.secondaryDark};
    }
  }
`;

const SkeletonWrapper = styled.div`
  width: 100%;
  background: white;
  padding: 10px;
  margin-top: 30px;

  div {
    display: flex;
    gap: 1.5rem;
    justify-content: flex-start;
    margin-bottom: 10px;
  }

  span {
    width: 100%;

    small {
      display: block;
      background-color: ${({ theme }: { theme: ThemeType }) =>
        theme.tertiaryGray};
      height: 1.4rem;

      animation: skeleton 2s infinite forwards linear;
    }

    small:first-of-type {
      width: 90%;
      margin-bottom: 7px;
    }
    small:last-of-type {
      width: 60%;
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
  }

  p {
    width: 45px;
    height: 45px;
    background: ${({ theme }: { theme: ThemeType }) => theme.tertiaryGray};
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
