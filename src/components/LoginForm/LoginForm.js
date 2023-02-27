import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Box, Form, Label, Button, Input } from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    if (email === '' || password === '') {
      alert('Fill in all fields please');
    }
    dispatch(
      logIn({
        email: email,
        password: password,
      })
    );
    form.reset();
  };

  return (
    <Box>
      <Form onSubmit={handleSubmit} autoComplete="on">
        <Label>
          Email
          <Input type="email" name="email" />
        </Label>
        <Label>
          Password
          <Input type="password" name="password" />
        </Label>
        <Button type="submit">Log In</Button>
      </Form>
    </Box>
  );
};
