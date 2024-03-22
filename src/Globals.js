import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
 *{
    margin:0px;
    padding:0px;
    box-sizing:border-box;
 }
 html{
   font-size:62.5%
 }
 body{
   min-height:100vh;
   display:flex;
   justify-content:center;
   padding:14.8rem 0 8.5rem;
   background: linear-gradient(180deg, #B068E9 0%, #6463E7 100%);
 }
 
 `;
