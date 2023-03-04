import styled from 'styled-components';
import background from '../../images/Log.webp';
import { Form, Field } from 'formik';

export const Forma = styled(Form)`
  margin-top: 230px;
  margin-bottom: 30px;
  width: 320px;
  height: 200px;
  border-radius: 5px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  background-color: #5eceff;
  padding: 10px;
`;

export const Label = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const MassageEmail = styled.span`
  position: absolute;
  color: #f75761;
  top: 55px;
  left: 0;
`;
export const MassagePass = styled.span`
  position: absolute;
  color: #f75761;
  top: 55px;
  left: 0;
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

export const Input = styled(Field)`
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
