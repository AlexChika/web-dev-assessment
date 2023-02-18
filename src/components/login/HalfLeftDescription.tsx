import styled from "styled-components";
import {
  CheckCircleIcon,
  MoneyIcon,
  StickerTwoIcon,
  StickerThreeIcon,
  StickerOneIcon,
} from "../../icons";

const HalfLeftDescription = () => {
  return (
    <Wrapper>
      <div>
        <MoneyIcon />

        <HeadingStyle>
          <h2>Hi there, see {"what’s"} new</h2>
          <p>
            Here’s how Foodcourt helps you manage your daily operations and
            ensure your riders are efficient
          </p>
        </HeadingStyle>

        {/* buttons wrapper */}
        <ButtonsWrapperStyle>
          <ButtonsRowStyle>
            <small>
              <StickerOneIcon class="sticker" />
            </small>

            <div>
              <span>
                <h3>Monitor your Eraning</h3>

                <p>
                  Easily see how much your busineses are earning on each
                  transaction and watch your earnings rise.
                </p>
              </span>

              <CheckCircleIcon class="icon" />
            </div>
          </ButtonsRowStyle>

          <ButtonsRowStyle>
            <small>
              <StickerTwoIcon class="sticker" />
            </small>

            <div>
              <span>
                <h3>Manage your Businesses</h3>

                <p>Easily see how much your busineses are earning on each</p>
              </span>

              <CheckCircleIcon class="icon" />
            </div>
          </ButtonsRowStyle>

          <ButtonsRowStyle>
            <small>
              <StickerThreeIcon class="sticker" />
            </small>

            <div>
              <span>
                <h3>Delegate to Staff</h3>
                <p>
                  Easily see how much your busineses are earning on each
                  transaction and watch your earnings rise.
                </p>
              </span>
              <CheckCircleIcon class="icon" />
            </div>
          </ButtonsRowStyle>
        </ButtonsWrapperStyle>
      </div>
    </Wrapper>
  );
};

export default HalfLeftDescription;

const Wrapper = styled.section`
  width: 100%;
  max-width: 620px;
  margin: 0 auto;
  padding: 20px 15px;
  order: 2;

  & > div {
    max-width: 500px;
    margin: 0 auto;
  }

  @media screen and (min-width: 900px) {
    width: 50%;
    order: 1;
  }

  @media screen and (min-width: 1200px) {
    width: 45%;
  }
`;

const HeadingStyle = styled.section`
  h2 {
    margin-top: 2rem;
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 3rem;
    color: ${({ theme }) => theme.primaryDark};
  }
  p {
    margin-top: 1rem;
    font-size: 1.5rem;
    letter-spacing: 0.3px;
    color: ${({ theme }: any) => theme.secondaryDark};
  }

  @media screen and (min-width: 500px) {
    h2 {
      font-size: 3rem;
    }

    p {
      font-size: 1.6rem;
    }
  }
`;

const ButtonsWrapperStyle = styled.section`
  margin-top: 40px;
`;

const ButtonsRowStyle = styled.section`
  display: flex;
  margin-bottom: 30px;
  border-radius: 20px;
  cursor: pointer;

  small {
    align-self: center;
  }

  div {
    display: flex;
    padding: 5px 10px;
    justify-content: space-between;

    span {
      width: calc(100% - 30px);
    }
  }

  .sticker {
    width: 50px;
    height: 50px;
  }

  .icon {
    color: #f9c320;
    width: 20px;
    height: 20px;
    align-self: center;
    display: none;
  }

  h3 {
    font-weight: 500;
    font-size: 1.8rem;
    color: ${({ theme }) => theme.tertiaryDark};
  }

  p {
    color: ${({ theme }) => theme.gray};
    font-size: 1.3rem;
    padding-top: 3px;
  }

  &:hover {
    background: #f8f8f6;
  }

  &:hover h3 {
    color: ${({ theme }: any) => theme.primaryDark};
  }
  &:hover p {
    color: ${({ theme }: any) => theme.mediumDark};
  }
  &:hover .icon {
    display: block;
  }

  @media screen and (min-width: 500px) {
    h3 {
      font-size: 2rem;
    }

    p {
      font-size: 1.6rem;
    }

    .icon {
      width: 25px;
      height: 25px;
    }

    .sticker {
      width: 64px;
      height: 64px;
    }
  }
`;
