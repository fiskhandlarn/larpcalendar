import { Container, Heading, VStack } from '@chakra-ui/react';
import { Events } from '@larpcalendar/firebase';
import './events-page.module.css';

/* eslint-disable-next-line */
export interface EventsPageProps {}

export function EventsPage(props: EventsPageProps) {
  return (
    <Container>
      <VStack alignItems="flex-start">
        <Heading as="h1">Events</Heading>
        <Events />
      </VStack>
    </Container>
  );
}

export default EventsPage;
