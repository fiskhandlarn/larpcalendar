import { EventCard } from '../event-card/event-card';
import { EventDocument } from '@larpcalendar/types';
import { FunctionComponent } from 'react';

export interface EventCardListProps {
  events?: EventDocument[];
  loading?: boolean;
}

export const EventCardList: FunctionComponent<EventCardListProps> = ({
  events = [],
  loading,
}) => {
  const eventMapper = (event: EventDocument, index: number) => {
    const { name } = event;
    return <EventCard name={name} key={`${name}${index}`} />;
  };
  return (
    <div>
      {loading && <div>Loading...</div>}
      {!events.length && <div>No events!</div>}
      {events.map(eventMapper)}
    </div>
  );
};

export default EventCardList;
