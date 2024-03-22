import styled from "styled-components";
import Arrow from "/images/icon-arrow-down.svg";
import data from "../data.json";
console.log(data);
export default function Question_Component({ questionIndex }) {
  const question = data[questionIndex].question;
  const answer = data[questionIndex].answer;

  return (
    <QuestionSection>
      <div>
        <Question>{question}</Question>
        <img src={Arrow} alt="arrow icon" />
      </div>
      <Answer>{answer}</Answer>
    </QuestionSection>
  );
}

const QuestionSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  border-bottom: 1px solid #e8e8ea;
  padding-bottom: 1.8rem;

  & > div {
    display: flex;
    align-items: center;
    gap: 3.4rem;
  }
`;
const Question = styled.h2`
  font-size: 1.3rem;
  font-weight: 400;
  line-height: 1.6rem;
  color: #787887;
`;

const Answer = styled.p`
  color: #787887;

  font-size: 1.2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.8rem;
`;