import styled from 'styled-components';

export const List = styled.ul`
  display: block;
  width: 440px;
  margin-left: auto;
  margin-right: auto;

  padding: 0;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const Button = styled.button`
  display: inline-block;
  width: 60px;
  height: 30px;
  cursor: pointer;
  font-size: 16px;
  color: white;
  background-color: #de0000;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  border: none;
  outline: none;
  transition-property: background-color;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: red;
  }
`;
