import { api } from '@/redux/api/apiSlice';

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => '/books',
    }),
    singleBook: builder.query({
      query: (id) => `/books/${id}`,
    }),
    postReview: builder.mutation({
      query: ({ id, data }) => ({
        url: `/books/reviwe/${id}`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['books'],
    }),
  }),
});

export const { useGetBooksQuery, useSingleBookQuery, usePostReviewMutation } =
  bookApi;
