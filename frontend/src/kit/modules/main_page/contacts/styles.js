import styled from 'styled-components';

export const ContactsWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);
    grid-row-gap: 20px
  }
`;

export const Contact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    height: 48px;
    width: auto;
  }
  p {
    text-align: center;
    margin-top: 20px;
    max-width: 180px;
    word-break: break-word;
    color: #ffffff;
  }
  a{
    text-align: center;
    margin-top: 20px;
    max-width: 180px;
    word-break: break-word;
    color: #fff;
    &:hover{
      color: rgb(52, 220, 227);
    }
  }
`;
