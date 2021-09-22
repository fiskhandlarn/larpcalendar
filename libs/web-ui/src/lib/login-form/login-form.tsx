import {
  Box,
  Button,
  useColorModeValue,
  chakra,
  Stack,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import { LoginFormValues } from '@larpcalendar/types';
import { FormikHelpers, useFormik } from 'formik';
import { FunctionComponent } from 'react';

export interface LoginFormProps {
  onSubmit: (
    values: LoginFormValues,
    formikHelpers: FormikHelpers<LoginFormValues>
  ) => void | Promise<unknown>;
  loading: boolean;
  isInvalid?: boolean;
}

export const LoginForm: FunctionComponent<LoginFormProps> = ({
  onSubmit,
  loading,
  isInvalid,
  children,
}) => {
  const { handleSubmit, handleBlur, handleChange } = useFormik<LoginFormValues>(
    {
      initialValues: { email: '', password: '' },
      onSubmit,
    }
  );
  return (
    <Box
      bg={useColorModeValue('white', 'gray.700')}
      py="8"
      px={{ base: '4', md: '10' }}
      shadow="base"
      rounded={{ sm: 'lg' }}
    >
      <chakra.form onSubmit={handleSubmit}>
        <Stack spacing="6">
          <FormControl id="email" isInvalid={isInvalid}>
            <FormLabel>Email address</FormLabel>
            <Input
              name="email"
              type="email"
              autoComplete="email"
              inputMode="email"
              onBlur={handleBlur}
              onChange={handleChange}
              required
            />
          </FormControl>
          <FormControl id="password" isInvalid={isInvalid}>
            <FormLabel>Password</FormLabel>
            <Input
              name="password"
              type="password"
              autoComplete="password"
              onBlur={handleBlur}
              onChange={handleChange}
              required
            />
          </FormControl>
          <Button type="submit" colorScheme="blue" size="lg" fontSize="md">
            Sign in
          </Button>
          {children}
        </Stack>
      </chakra.form>
    </Box>
  );
};

export default LoginForm;
