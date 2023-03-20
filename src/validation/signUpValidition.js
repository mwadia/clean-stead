import * as yup from 'yup';

const SignUpValid = yup.object().shape({
  name: yup.string().min(3).required('please enter your name '),
  email: yup.string().min(8).required('please Enter your email').email(),
  phone: yup.number().min(10).required('please Enter your phone number'),
  password: yup
    .string()
    .required('No password provided.')
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
});
export default SignUpValid;
