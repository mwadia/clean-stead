import * as yup from 'yup';

const SignInValid = yup.object().shape({
  email: yup.string().required('Enter your email').email(),
  password: yup
    .string()
    .required('No password provided.')
    .min(8, 'Password is too short - should be 8 chars minimum.'),
});
export default SignInValid;
