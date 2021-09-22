import { Heading, VStack } from '@chakra-ui/react';

import { EventCardList } from '@larpcalendar/web-ui';
import { FunctionComponent } from 'react';
import { Meta } from '../meta/meta';
import { useEvents } from '@larpcalendar/firebase';

/* eslint-disable-next-line */
export interface EventsPageProps {}

export const EventsPage: FunctionComponent<EventsPageProps> = (_props) => {
  const { data, status } = useEvents();
  return (
    <VStack alignItems="flex-start">
      <Meta title="Events" />
      <Heading as="h1">Events</Heading>
      {status === 'error' ? (
        <div>Error!</div>
      ) : status === 'loading' ? (
        <div>Loading...</div>
      ) : (
        <EventCardList events={data} />
      )}
    </VStack>
  );
};

export default EventsPage;
