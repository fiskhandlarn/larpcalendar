import { FunctionComponent } from 'react';

/* eslint-disable-next-line */
export interface EventCardProps {
  name?: string;
}

export const EventCard: FunctionComponent<EventCardProps> = ({ name }) => {
  if (!name) {
    return null;
  }

  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
};

export default EventCard;
