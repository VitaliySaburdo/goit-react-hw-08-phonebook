import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Box, Form, Input, Label, Button } from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    if (name === '' || email === '' || password === '') {
      alert('Fill in all fields please');
    }
    dispatch(
      register({
        name: name,
        email: email,
        password: password,
      })
    );
    form.reset();
  };

  return (
    <Box>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Label>
          Username
          <Input type="text" name="name" />
        </Label>
        <Label>
          Email
          <Input type="email" name="email" />
        </Label>
        <Label>
          Password
          <Input type="password" name="password" />
        </Label>
        <Button type="submit">Register</Button>
      </Form>
    </Box>
  );
};
