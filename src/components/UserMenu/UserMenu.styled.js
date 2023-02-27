import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;
export const UserName = styled.p`
  font-weight: 700;
`;

export const Button = styled.button`
  display: block;
  width: 120px;
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
