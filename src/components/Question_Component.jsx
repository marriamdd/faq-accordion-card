import styled from "styled-components";
import Arrow from "/images/icon-arrow-down.svg";
export default function Question_Component() {
  return (
    <QuestionSection>
      <div>
        <Question>How many team members can I invite?</Question>
        <img src={Arrow} alt="arrow icon" />
      </div>
    </QuestionSection>
  );
}

const QuestionSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  div{
    display:flex;
    align-items: center;
    gap: 3.4rem;
  }
`;
const Question = styled.h2`
  font-size: 1.3rem;
  font-weight: 700;
  line-height: 1.6rem;
`;
