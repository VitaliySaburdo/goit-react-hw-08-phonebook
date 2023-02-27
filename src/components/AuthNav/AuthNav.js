import { NavbarLink } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <div>
      <NavbarLink to="/register">Register</NavbarLink>
      <NavbarLink to="/login">Log In</NavbarLink>
    </div>
  );
};
