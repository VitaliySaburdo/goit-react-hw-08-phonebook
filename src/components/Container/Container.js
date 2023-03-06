import { Box, Shell } from './Container.styled';

export const Container = ({ children }) => {
  return (
    <Shell>
      <Box>{children}</Box>;
    </Shell>
  );
};
