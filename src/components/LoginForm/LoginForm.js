// Exenple
import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@mui/material/Button';
import { logIn } from 'redux/auth/operations';
import { useDispatch } from 'react-redux';
import { Form, Box } from './LoginForm.styled';
import TextField from '@mui/material/TextField';

const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

export const LoginForm = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      dispatch(logIn({ values }));
    },
  });

  return (
    <Box>
      <Form onSubmit={formik.handleSubmit}>
        <TextField
          sx={{
            color: 'success.main',
          }}
          placeholder="Please your email"
          fullWidth
          size="small"
          margin="normal"
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          placeholder="Please your password"
          fullWidth
          size="small"
          margin="normal"
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </Form>
    </Box>
  );
};

// import { useDispatch } from 'react-redux';
// import { logIn } from 'redux/auth/operations';
// import {
//   Box,
//   Forma,
//   Label,
//   Button,
//   Input,
//   MassageEmail,
//   MassagePass,
// } from './LoginForm.styled';
// import { Formik, ErrorMessage } from 'formik';
// import { object, string } from 'yup';
// // import TextField from '@mui/material/TextField';

// export const LoginForm = () => {
//   const dispatch = useDispatch();

//   const initialValues = { email: '', password: '' };

//   const validationSchema = object({
//     email: string('Enter your email')
//       .email('Enter a valid email')
//       .required('Email is required'),
//     password: string().min(6).max(16).required(),
//   });

//   const handleSubmit = (values, { resetForm }) => {
//     dispatch(logIn({ values }));
//     const { email, password } = values;
//     if (email === '' || password === '') {
//       alert('Fill all the fields');
//     }
//     resetForm();
//   };

//   return (
//     <Box>
//       <Formik
//         initialValues={initialValues}
//         validationSchema={validationSchema}
//         onSubmit={handleSubmit}
//       >
//         <Forma autoComplete="on">
//           <Label>
//             Email
//             {/* <TextField label="Email" /> */}
//             <Input type="email" name="email" />
//             <ErrorMessage component={MassageEmail} name="email" />
//           </Label>
//           <Label>
//             Password
//             <Input type="password" name="password" />
//             <ErrorMessage component={MassagePass} name="password" />
//           </Label>
//           <Button type="submit">Log In</Button>
//         </Forma>
//       </Formik>
//     </Box>
//   );
// };
