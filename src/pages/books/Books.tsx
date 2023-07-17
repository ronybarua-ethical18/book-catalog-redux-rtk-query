import React, { ReactNode } from 'react';
import { useGetBooksQuery } from '../../redux/features/books/bookApi';
import Book from './Book';

export default function Books(): ReactNode {
  const {
    data: books,
    isLoading,
    isSuccess,
    isError,
  } = useGetBooksQuery(undefined);

  console.log('books', books);
  return (
    <div className=" m-auto mt-10" style={{ width: '66.5%' }}>
      <div className="flex items-center justify-between mb-12">
        <h4 className="mt-2 text-2xl font-bold text-green-400">Book List</h4>

        <div className="flex items-center space-x-4">
          <button className="lws-filter-btn active-filter">All</button>
          <button className="lws-filter-btn ">Featured</button>
        </div>
      </div>
      <div className="space-y-6 md:space-y-0 md:grid grid-cols-1 lg:grid-cols-3 gap-6">
        {books?.data?.length > 0 &&
          books?.data?.map((book: any) => <Book key={book?._id} book={book} />)}
      </div>
    </div>
  );
}
