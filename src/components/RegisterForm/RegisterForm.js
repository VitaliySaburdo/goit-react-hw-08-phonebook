//
import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@mui/material/Button';
import { register } from 'redux/auth/operations';
import { useDispatch } from 'react-redux';
import { Form, Box, Title } from './RegisterForm.styled';
import TextField from '@mui/material/TextField';

const validationSchema = yup.object({
  name: yup.string('Enter your Name').required('Name is required'),
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      dispatch(register(values));
    },
  });

  return (
    <Box>
      <Form onSubmit={formik.handleSubmit}>
        <Title>Register</Title>
        <TextField
          sx={{ height: 65 }}
          placeholder="Please your name"
          fullWidth
          size="small"
          margin="none"
          id="name"
          name="name"
          label="Name"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <TextField
          sx={{ height: 65 }}
          placeholder="Please your email"
          fullWidth
          size="small"
          margin="none"
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          sx={{ height: 65 }}
          placeholder="Please your password"
          fullWidth
          size="small"
          margin="none"
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <Button
          sx={{ marginTop: '10px' }}
          color="primary"
          variant="contained"
          fullWidth
          type="submit"
        >
          Register
        </Button>
      </Form>
    </Box>
  );
};

// import { useDispatch } from 'react-redux';
// import { register } from 'redux/auth/operations';
// import { Box, Form, Input, Label, Button } from './RegisterForm.styled';

// export const RegisterForm = () => {
//   const dispatch = useDispatch();

//   const handleSubmit = e => {
//     e.preventDefault();
//     const form = e.currentTarget;
//     const name = form.elements.name.value;
//     const email = form.elements.email.value;
//     const password = form.elements.password.value;

//     if (name.trim() === '' || email.trim() === '' || password.trim() === '') {
//       return alert('Fill in all fields please');
//     }
//     dispatch(
//       register({
//         name: name,
//         email: email,
//         password: password,
//       })
//     );
//     form.reset();
//   };

//   return (
//     <Box>
//       <Form onSubmit={handleSubmit} autoComplete="off">
//         <Label>
//           Username
//           <Input type="text" name="name" />
//         </Label>
//         <Label>
//           Email
//           <Input type="email" name="email" />
//         </Label>
//         <Label>
//           Password
//           <Input type="password" name="password" />
//         </Label>
//         <Button type="submit">Register</Button>
//       </Form>
//     </Box>
//   );
// };
