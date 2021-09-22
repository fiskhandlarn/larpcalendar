import { DocumentData } from 'firebase/firestore';

export type QueryStatus = 'loading' | 'error' | 'success';

export type Timestamp = {
  seconds: number;
  nanoseconds: number;
};

export type Geopoint = {
  _lat: number;
  _long: number;
};

export interface EventDocument extends DocumentData {
  name?: string;
  date?: {
    start?: Timestamp;
    end?: Timestamp;
  };
  location?: {
    name?: string;
    address?: string;
    country?: string;
    city?: string;
    coordinates?: Geopoint;
  };
}

export interface LoginFormValues {
  email: string;
  password: string;
}
