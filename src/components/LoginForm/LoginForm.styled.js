import styled from 'styled-components';
import background from '../../images/Log.webp';
import { Field } from 'formik';

export const Form = styled.form`
  position: absolute;
  margin-top: 230px;
  width: 320px;
  border-radius: 5px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  background-color: #d7daec;
  padding: 25px;
`;

export const Box = styled.div`
  position: relative;
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
