import styled from 'styled-components';
import background from '../../images/Hero.webp';

export const Shell = styled.div`
  position: relative;
  height: 700px;
  background-image: url(${background});
  margin-left: auto;
  margin-right: auto;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Box = styled.div`
  position: absolute;
  left: 25%;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  width: 460px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid blue;
  background-color: #d7daec;
`;
