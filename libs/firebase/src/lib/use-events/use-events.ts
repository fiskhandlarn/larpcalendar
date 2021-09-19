import { collection, query, orderBy } from '@firebase/firestore';
import { EventDocument, QueryStatus } from '@larpcalendar/types';

import { useState } from 'react';
import {
  ObservableStatus,
  useFirestore,
  useFirestoreCollectionData,
} from 'reactfire';

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
