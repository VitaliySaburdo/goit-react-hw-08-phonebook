import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavbarLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 16px;
  line-height: 1.3;
  text-align: center;
  color: #2a363b;

  &.active {
    position: relative;
    color: blue;
    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      display: block;
      transform: translateY(1px);
      width: 100%;
      height: 4px;
      border-radius: 2px;
      background-color: blue;
    }
  }
`;
