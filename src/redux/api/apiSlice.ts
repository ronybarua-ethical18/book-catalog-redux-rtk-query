import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a function to retrieve the access token from the Redux state
const getAccessToken = (state: any) => state?.user?.user?.accessToken;

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8000/api/v1',
    prepareHeaders: (headers, { getState }) => {
      // Get the access token from the Redux state
      const accessToken = getAccessToken(getState());

      // If the access token exists, add it to the Authorization header
      if (accessToken) {
        headers.set('Authorization', `${accessToken}`);
      }

      // Set content type as JSON
      headers.set('Content-Type', 'application/json');

      return headers;
    },
  }),
  tagTypes: ['books', 'singleBook', 'wishlist'],
  endpoints: () => ({}),
});
