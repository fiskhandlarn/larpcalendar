import { Text, Container, Heading, Link, VStack } from '@chakra-ui/layout';
import './about-page.module.css';

/* eslint-disable-next-line */
export interface AboutPageProps {}

export function AboutPage(props: AboutPageProps) {
  return (
    <Container>
      <VStack alignItems="flex-start">
        <Heading as="h1">About Larp Calendar</Heading>
        <Text>
          Larp Calendar lists larp events accepting international participants.
        </Text>
        <Text>
          The page is related to the{' '}
          <Link href="https://nordiclarp.org/"> Nordic Larp website</Link>.
        </Text>
      </VStack>
    </Container>
  );
}

export default AboutPage;
