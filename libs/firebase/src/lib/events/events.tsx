import { FunctionComponent } from 'react';
import { EventCardList } from '@larpcalendar/web-ui';
import { useEvents } from '../use-events/use-events';

/* eslint-disable-next-line */
export interface EventsProps {}

export const Events: FunctionComponent<EventsProps> = (_props) => {
  const { data, status } = useEvents();
  return status === 'error' ? (
    <div>Error!</div>
  ) : status === 'loading' ? (
    <div>Loading...</div>
  ) : (
    <EventCardList events={data} />
  );
};

export default Events;
