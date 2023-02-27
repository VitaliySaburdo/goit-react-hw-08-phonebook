import styled from 'styled-components';
import background from '../../images/Hero.webp';
import { Link } from 'react-router-dom';

export const HeroLink = styled(Link)`
  text-decoration: none;
`;
export const Container = styled.div`
  height: 700px;
  background-image: url(${background});
  margin-left: auto;
  margin-right: auto;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Title = styled.h1`
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 36px;
  line-height: 1.3;
  text-align: center;
  padding-top: 50px;
  margin-bottom: 60px;
`;

export const Button = styled.button`
  display: block;
  margin-left: auto;
  margin-right: auto;
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
