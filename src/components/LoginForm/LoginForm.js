import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Box, Forma, Label, Button, Input } from './LoginForm.styled';
import { Formik, ErrorMessage } from 'formik';
// import { object, string } from 'yup';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const initialValues = { email: '', password: '' };

  // const shema = object({
  //   email: string().email().required(),
  //   password: string().min(6).max(16).required(),
  // });

  const handleSubmit = (values, { resetForm }) => {
    dispatch(logIn({ values }));
    console.log(values);
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
        // validationSchema={shema}
        onSubmit={handleSubmit}
      >
        <Forma autoComplete="on">
          <Label>
            Email
            <Input type="email" name="email" />
            <ErrorMessage name="email" />
          </Label>
          <Label>
            Password
            <Input type="password" name="password" />
            <ErrorMessage name="password" />
          </Label>
          <Button type="submit">Log In</Button>
        </Forma>
      </Formik>
    </Box>
  );
};
