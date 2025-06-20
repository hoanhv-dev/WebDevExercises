import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { RSVPData } from '../../../../storage/types';

// Define the response type from the API
type RSVPResponse = RSVPData & {
  id: string;
  submittedAt: string;
};

// Define the request payload type
type RSVPRequest = {
  name: string;
  email: string;
  guests: Array<{
    name: string;
    attending: boolean;
  }>;
  message: string;
};

export const rsvpApi = createApi({
  reducerPath: 'rsvpApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: '/api', // Update with your API base URL
    prepareHeaders: (headers) => {
      headers.set('Content-Type', 'application/json');
      return headers;
    },
  }),
  tagTypes: ['RSVP'],
  endpoints: (builder) => ({
    submitRSVP: builder.mutation<RSVPResponse, RSVPRequest>({
      query: (rsvpData) => ({
        url: '/rsvp',
        method: 'POST',
        body: rsvpData,
      }),
      invalidatesTags: ['RSVP'],
    }),
  }),
});

export const { useSubmitRSVPMutation } = rsvpApi;
