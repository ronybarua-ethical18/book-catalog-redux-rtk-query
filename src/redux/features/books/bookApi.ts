import { api } from '@/redux/api/apiSlice';

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => '/books',
      providesTags: ['books'],
    }),
    getBooksFromWishlist: builder.query({
      query: () => '/users/wishlist',
      providesTags: ['wishlist'],
    }),
    addBookToWishlist: builder.mutation({
      query: ({ data }) => ({
        url: `/users/wishlist`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['wishlist'],
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
    updateBook: builder.mutation({
      query: ({ id, data }) => ({
        url: `/books/${id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['singleBook'],
    }),
    deleteBook: builder.mutation({
      query: ({ id }) => ({
        url: `/books/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['books'],
    }),
  }),
});

export const {
  useGetBooksQuery,
  useSingleBookQuery,
  usePostReviewMutation,
  useUpdateBookMutation,
  useGetBooksFromWishlistQuery,
  useAddBookToWishlistMutation,
  useDeleteBookMutation,
} = bookApi;
