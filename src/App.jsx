import { useState } from "react";
import styled from "styled-components";
import { GlobalStyles } from "./Globals";
import "./App.css";
import IllustrationMobile from "/images/illustration-woman-online-mobile.svg";
import IllustrationMobileSHadow from "/images/bg-pattern-mobile.svg";
import data from "./data.json";
import Question from "./components/Question_Component";
function App() {
  const [answer, setAnswer] = useState(null);

  return (
    <>
      <GlobalStyles />
      <Main>
        <img src={IllustrationMobile} alt="girl illustration" />

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
    </>
  );
}

export default App;
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

  & > img {
    width: 23.7rem;
    height: 18rem;
    position: absolute;
    top: -10.5rem;
  }
`;
const Title = styled.h1`
  color: #1e1f36;
  font-size: 3.2rem;
  font-weight: 700;
  line-height: normal;
`;
