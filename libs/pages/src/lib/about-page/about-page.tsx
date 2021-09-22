import { Text, Heading, Link, VStack } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import { Meta } from '../meta/meta';

/* eslint-disable-next-line */
export interface AboutPageProps {}

export const AboutPage: FunctionComponent<AboutPageProps> = (_props) => {
  return (
    <VStack alignItems="flex-start">
      <Meta title="About" />
      <Heading as="h1">About Larp Calendar</Heading>
      <Text>
        Larp Calendar lists larp events accepting international participants.
      </Text>
      <Text>
        The page is related to the{' '}
        <Link href="https://nordiclarp.org/"> Nordic Larp website</Link>.
      </Text>
    </VStack>
  );
};

export default AboutPage;
