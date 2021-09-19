import { Container, Heading, VStack } from '@chakra-ui/react';
import { useEvents } from '@larpcalendar/firebase';
import { EventCardList } from '@larpcalendar/web-ui';
import './events-page.module.css';

/* eslint-disable-next-line */
export interface EventsPageProps {}

export function EventsPage(props: EventsPageProps) {
  const { data, status } = useEvents();
  return (
    <Container>
      <VStack alignItems="flex-start">
        <Heading as="h1">Events</Heading>
        {status === 'error' ? (
          <div>Error!</div>
        ) : status === 'loading' ? (
          <div>Loading...</div>
        ) : (
          <EventCardList events={data} />
        )}
      </VStack>
    </Container>
  );
}

export default EventsPage;
