import styled from 'styled-components';
import background from '../../images/Log.webp';

export const Form = styled.form`
  margin-top: 210px;
  margin-bottom: 30px;
  width: 320px;
  height: 280px;
  border-radius: 5px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  background-color: #5eceff;
  padding: 10px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const Box = styled.div`
  height: 700px;
  background-image: url(${background});
  margin-left: auto;
  margin-right: auto;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  margin-top: 30px;
  display: flex;
  justify-content: center;
`;

export const Input = styled.input`
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
  width: 93%;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 4px;
  cursor: pointer;
  font-size: 15px;
  background-color: #aae5ff;
`;

export const Button = styled.button`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 120px;
  height: 30px;
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