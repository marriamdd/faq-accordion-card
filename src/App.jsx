import { useState } from "react";
import styled from "styled-components";
import { GlobalStyles } from "./Globals";
import "./App.css";
import IllustrationMobile from "/images/illustration-woman-online-mobile.svg";
import IllustrationDesktop from "/images/illustration-woman-online-desktop.svg";
import IllustrationMobileSHadow from "/images/bg-pattern-mobile.svg";
import PatternDesktop from "/images/bg-pattern-desktop.svg";
import data from "./data.json";
import Question from "./components/Question_Component";
function App() {
  const [answer, setAnswer] = useState(null);

  return (
    <>
      <GlobalStyles />

      <Div>
        <DesktopBox
          src="/images/illustration-box-desktop.svg"
          alt="desktopBox"
        />
        <Main>
          <img
            className="mobileWomen"
            src={IllustrationMobile}
            alt="illustration-woman-online-mobile"
          />
          <img
            className="desktopWomen"
            src={IllustrationDesktop}
            alt="illustration-woman-online-desktop"
          />

          <Title>FAQ</Title>
          {data.map((item, index) => (
            <Question
              key={index}
              questionIndex={index}
              setAnswer={setAnswer}
              answer={answer}
            />
          ))}
        </Main>
      </Div>
    </>
  );
}

export default App;
const Div=styled.div`
  position: relative;
`
const Main = styled.main`
  width: 32.7rem;
  padding: 13.2rem 2.4rem 4.8rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 3.8rem;
  border-radius: 23px;
  background: #fff;
  box-shadow: 0px 50px 50px -20px rgba(53, 18, 122, 0.5);
  position: relative;

  .mobileWomen {
    width: 23.7rem;
    height: 18rem;
    position: absolute;
    top: -10.5rem;
  }
  .desktopWomen {
    display: none;
  }
 
  @media only screen and (min-width: 90rem) {
    width: 92rem;
    padding: 6.5rem 9.5rem 8.3rem 47.5rem;
    align-items: flex-start;
    background-image: url(${PatternDesktop});
    background-repeat: no-repeat;
    overflow: hidden;
    background-position: -57.5rem -27rem;
    .desktopWomen {
      display: flex;
      position: absolute;
      left: -10rem;
      top: 8rem;
    }
    .mobileWomen {
      display: none;
    }
  }
`;
const Title = styled.h1`
  color: #1e1f36;
  font-size: 3.2rem;
  font-weight: 700;
  line-height: normal;
`;
const DesktopBox = styled.img`
  display: none;
  @media only screen and (min-width: 90rem) {
    display: flex;
    position: absolute;
  left: -9.5rem;
    top: 24rem; 
    z-index: 99999;
  }
`;
