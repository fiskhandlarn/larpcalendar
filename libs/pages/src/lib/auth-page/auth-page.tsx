import {
  VStack,
  Heading,
  useToast,
  Alert,
  AlertIcon,
  AlertDescription,
  CloseButton,
  Container,
  Center,
  Box,
} from '@chakra-ui/react';
import { Redirect } from 'react-router-dom';
import { useAuth, useSigninCheck } from 'reactfire';
import { FunctionComponent, useState } from 'react';

import { Meta } from '../meta/meta';

import { AlertBox, AlertBoxProps, LoginForm } from '@larpcalendar/web-ui';
import { LoginFormValues } from '@larpcalendar/types';
import { FormikHelpers } from 'formik';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { FirebaseError } from '@firebase/util';

/* eslint-disable-next-line */
export interface AuthPageProps {}

const credentialErrors = ['auth/user-not-found', 'auth/wrong-password'];

export const AuthPage: FunctionComponent<AuthPageProps> = () => {
  const { status, data: signInCheckResult } = useSigninCheck();
  const [loading, setLoading] = useState<boolean>(false);
  const [isInvalid, setIsInvalid] = useState<boolean>(false);
  const [error, setError] = useState<Partial<AlertBoxProps> | null>(null);
  const firebaseAuth = useAuth();
  const toast = useToast();

  const onSubmit = async (
    values: LoginFormValues,
    _formikHelpers: FormikHelpers<LoginFormValues>
  ) => {
    try {
      setLoading(true);
      setError(null);
      setIsInvalid(false);
      const userCredential = await signInWithEmailAndPassword(
        firebaseAuth,
        values.email,
        values.password
      );
      console.log(userCredential);
      const description = userCredential?.user?.displayName
        ? `Welcome back ${userCredential.user.displayName}`
        : 'Welcome back!';
      toast({
        title: 'Signed in',
        description,
        status: 'success',
      });
      setLoading(false);
    } catch (error) {
      if (error instanceof FirebaseError) {
        if (credentialErrors.includes(error.code)) {
          setError({
            title: "Couldn't sign in",
            description: 'Email or password was incorrect!',
          });
          setIsInvalid(true);
        } else {
          setError({
            title: "Couldn't sign in",
            description: 'Please try again!',
          });
        }
      } else {
        setError({
          title: "Couldn't sign in",
          description: 'Please try again!',
        });
      }
      setLoading(false);
    }
  };

  return status === 'loading' ? null : signInCheckResult.signedIn ? (
    <Redirect to="/" />
  ) : (
    <VStack spacing={6}>
      <Meta title="Sign in" />
      <Heading as="h1">Sign in</Heading>
      <LoginForm onSubmit={onSubmit} loading={loading} isInvalid={isInvalid} />
      {error && <AlertBox {...error} center={false} />}
    </VStack>
  );
};

export default AuthPage;
