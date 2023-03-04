import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import {
  Box,
  Forma,
  Label,
  Button,
  Input,
  MassageEmail,
  MassagePass,
} from './LoginForm.styled';
import { Formik, ErrorMessage } from 'formik';
import { object, string } from 'yup';
// import TextField from '@mui/material/TextField';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const initialValues = { email: '', password: '' };

  const shema = object({
    email: string().email().required(),
    password: string().min(6).max(16).required(),
  });

  const handleSubmit = (values, { resetForm }) => {
    dispatch(logIn({ values }));
    const { email, password } = values;
    if (email === '' || password === '') {
      alert('Fill all the fields');
    }
    resetForm();
  };

  return (
    <Box>
      <Formik
        initialValues={initialValues}
        validationSchema={shema}
        onSubmit={handleSubmit}
      >
        <Forma autoComplete="on">
          <Label>
            Email
            {/* <TextField label="email"> */}
            <Input type="email" name="email" />
            {/* </TextField> */}
            <ErrorMessage component={MassageEmail} name="email" />
          </Label>
          <Label>
            Password
            <Input type="password" name="password" />
            <ErrorMessage component={MassagePass} name="password" />
          </Label>
          <Button type="submit">Log In</Button>
        </Forma>
      </Formik>
    </Box>
  );
};
