import styled from "styled-components";
import Arrow from "/images/icon-arrow-down.svg";
import data from "../data.json";

export default function Question_Component({
  questionIndex,
  setAnswer,
  answer,
}) {
  const question = data[questionIndex].question;
  const currentAnswer = data[questionIndex].answer;

  return (
    <QuestionSection
      onClick={() => {
        if (answer === questionIndex) {
          setAnswer(null);
        } else {
          setAnswer(questionIndex);
        }
      }}
      answer={answer}
      questionindex={questionIndex}
    >
      <div>
        <Question answer={answer} questionindex={questionIndex}>
          {question}
        </Question>
        <img src={Arrow} alt="arrow icon" />
      </div>
      {answer === questionIndex ? <Answer>{currentAnswer}</Answer> : null}
    </QuestionSection>
  );
}

const QuestionSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  border-bottom: 1px solid #e8e8ea;
  padding-bottom: 1.8rem;
  width: 100%;
  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    & > img {
      transform: ${(props) =>
        props.answer === props.questionindex
          ? "rotate(180deg)"
          : "rotate(0deg)"};
      transition: 0.3s;
    }
  }
`;
const Question = styled.h2`
  font-size: 1.3rem;
  font-weight: ${(props) =>
    props.answer === props.questionindex ? "700" : "400"};
  line-height: 1.6rem;
  color: #4b4c5f;
  transition: 0.3s;
  &:hover {
    color: #f47b56;
  }
`;

const Answer = styled.p`
  color: #787887;

  font-size: 1.2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.8rem;
`;
