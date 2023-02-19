import styled from "styled-components";
import { useQuery, gql } from "@apollo/client";
import ContentSkeleton from "./ContentSkeleton";

const Content = () => {
  const COMPANY_QUERY = gql`
    {
      company {
        ceo
        cto
        name
      }
    }
  `;
  const { data } = useQuery(COMPANY_QUERY);

  if (!data) {
    return <ContentSkeleton />;
  }

  const company: CompanyType = data.company;
  const { name, cto, ceo } = company;

  function getCompanyInitial(text: string) {
    let name = text || "MC";
    let initial;
    const words = name.split(" ");
    if (words.length < 2) {
      return (initial = words[0].substring(0, 2).toUpperCase());
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    return (initial = words[0].charAt(0) + words[1].charAt(1)).toUpperCase();
  }

  return (
    <Wrapper>
      {/* company name */}
      <div className="heading">
        <div className="avatar">
          <span className="initial">{getCompanyInitial(name)}</span>
        </div>
        <h3 className="company__name">{name}</h3>
      </div>

      {/* Ceo name */}
      <div className="ceo">
        <p className="title">CEO</p>
        <h3 className="name">{ceo}</h3>
      </div>

      {/* cto name */}
      <div className="ceo">
        <p className="title">CTO</p>
        <h3 className="name">{cto}</h3>
      </div>
    </Wrapper>
  );
};

export default Content;

const Wrapper = styled.section`
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

  .heading {
    display: flex;
    align-items: center;

    .avatar {
      padding: 2px;
      border: 1px solid #fcb6c0;
      width: 60px;
      height: 60px;
      border-radius: 50%;

      .initial {
        background: ${({ theme }: { theme: ThemeType }) => theme.secondaryRed};
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        width: 100%;
        height: 100%;
        font-weight: 500;
        font-size: 2.4rem;
        color: ${({ theme }: { theme: ThemeType }) => theme.primaryGreen};
      }
    }

    .company__name {
      margin-left: 15px;
      font-weight: 600;
      font-size: 2.4rem;
      color: ${({ theme }: { theme: ThemeType }) => theme.primaryDark};
    }
  }

  .ceo {
    margin-top: 30px;
    .title {
      font-size: 1.3rem;
      color: ${({ theme }: { theme: ThemeType }) => theme.tertiaryDark};
    }

    .name {
      font-size: 1.6rem;
      color: ${({ theme }: { theme: ThemeType }) => theme.primaryDark};
      font-weight: 400;
    }
  }
`;
