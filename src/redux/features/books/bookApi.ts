import { api } from "@/redux/api/apiSlice";


const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => '/books',
    }),
    singleProduct: builder.query({
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

export const {
  useGetProductsQuery,
  useSingleProductQuery,
  usePostReviewMutation,
  
} = bookApi;
