import styled from 'styled-components';

export const Form = styled.form`
  margin-top: 10px;
  margin-bottom: 30px;
  width: 440px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  margin-top: 15px;
`;

export const Container = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.p`
  font-weight: 700;
  font-size: 28px;
`;

export const Input = styled.input`
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
  width: 95%;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 4px;
  cursor: pointer;
  font-size: 15px;
  /* background-color: #7fcfff; */
`;

export const Button = styled.button`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  width: 180px;
  height: 40px;
  cursor: pointer;
  font-size: 16px;
  color: white;
  background-color: green;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  border: none;
  outline: none;
  transition-property: background-color;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: #13ba00;
  }
`;
