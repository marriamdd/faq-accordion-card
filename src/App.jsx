import { useState } from "react";
import styled from "styled-components";
import { GlobalStyles } from "./Globals";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <GlobalStyles />
      <Main>
<Title>FAQ</Title>
      </Main>
    </>
  );
}

export default App;
const Main = styled.main`
  width: 32.7rem;
  padding: 13.2rem 2.4rem 4.8rem;
  display: flex;
  align-items:center;
  flex-direction: column;
  gap: 3.8rem;
  border-radius: 23px;
  background: #fff;
  box-shadow: 0px 50px 50px -20px rgba(53, 18, 122, 0.5);
`;
const Title=styled.h1`
  color: #1E1F36;
font-size: 3.2rem;
font-weight: 700;
line-height: normal;
`
