import styled from 'styled-components';


export const InputsWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 30px;
  grid-auto-flow: column;
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    grid-row-gap: 20px
  }
`;

export const Input = styled.input`
  width: 100%;
  display: block;
  border-bottom: 1px solid #878787 !important;
  font-size: 16px;
  line-height: 20px;
  color: #4f4f4f !important;
  margin-top: 30px;
  padding: 10px;
`;

export const Textarea = styled.textarea`
  width: 100%;
  grid-area: message;
  resize: vertical;
  height: 155px;
  border: 1px solid #878787 !important;
  width: 100%;
  font-size: 16px;
  line-height: 20px;
  color: #4f4f4f !important;
  margin-top: 30px;
  padding: 10px;
`;

export const Button = styled.button`
  margin-top: 40px;
  padding: 12px 40px;
  word-spacing: normal;
  margin-bottom: 5px;
  display: inline-block;
  border: 2px solid #878787;
  border-radius: 5px;
  padding: 12px 40px;
  color: #878787;
  font-size: 14px;
  line-height: 24px;
  text-transform: uppercase;
  font-weight: 700;
  transition: 0.3s;
  &:hover {
    border: 2px solid #2cc3cb;
    color: #2cc3cb;
  }
`;

export const ErrorMessage = styled.label`
  display: block;
  position: absolute;
  padding-top: 5px;
  padding-left: 10px;
  color: #de3163;
  font-size: 14px;
  line-height: 18px;
  text-align: left;
  align-self: left;
  width: fit-content;
`;
