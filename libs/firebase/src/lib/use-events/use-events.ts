import { EventDocument, QueryStatus } from '@larpcalendar/types';
import {
  ObservableStatus,
  useFirestore,
  useFirestoreCollectionData,
} from 'reactfire';
import { collection, orderBy, query } from '@firebase/firestore';

import { useState } from 'react';

export interface UseEvents {
  status: QueryStatus;
  data?: unknown;
  error?: Error;
}

export function useEvents(): ObservableStatus<EventDocument[]> {
  const firestore = useFirestore();
  const [isAscending] = useState<boolean>(true);
  const eventsCollection = collection(firestore, 'events');
  const eventsQuery = query<EventDocument>(
    eventsCollection,
    orderBy('date.start', isAscending ? 'asc' : 'desc')
  );
  const result = useFirestoreCollectionData(eventsQuery, {
    idField: 'id',
  });

  return result;
}

export default useEvents;
