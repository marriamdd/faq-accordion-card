import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@100..900&family=Outfit:wght@100..900&family=Overpass+Mono:wght@300..700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    padding: 14.8rem 0 8.5rem;
    font-family: "Kumbh Sans", sans-serif;
    background: linear-gradient(180deg, #B068E9 0%, #6463E7 100%);
  }
`;

