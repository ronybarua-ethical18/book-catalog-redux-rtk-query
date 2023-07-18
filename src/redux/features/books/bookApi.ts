import { api } from '@/redux/api/apiSlice';

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => '/books',
    }),
    singleBook: builder.query({
      query: (id) => `/books/${id}`,
      providesTags: ['singleBook'],
    }),
    postReview: builder.mutation({
      query: ({ id, data }) => ({
        url: `/books/reviews/${id}`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['singleBook'],
    }),
  }),
});

export const { useGetBooksQuery, useSingleBookQuery, usePostReviewMutation } =
  bookApi;
