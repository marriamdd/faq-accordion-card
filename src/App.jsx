import { useState } from "react";
import styled from "styled-components";
import { GlobalStyles } from "./Globals";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <GlobalStyles />
      <Main></Main>
    </>
  );
}

export default App;
const Main = styled.main`
  width: 32.7rem;
  background: white;
  padding: 13, 2rem 2.4rem 4.8rem;
  display: flex;
  flex-direction: column;
  gap: 3.8;
`;
