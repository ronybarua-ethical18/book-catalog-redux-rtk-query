import React, { ReactNode } from 'react';
import { useGetBooksFromWishlistQuery } from '../../redux/features/books/bookApi';
import Book from './Book';

export default function Wishlist(): ReactNode {
  const {
    data: books,
  } = useGetBooksFromWishlistQuery(undefined);

  console.log('wishlist', books);
  return (
    <div className=" m-auto mt-10" style={{ width: '66.5%' }}>
      <div className="flex items-center justify-between mb-12">
        <h4 className="mt-2 text-2xl font-bold text-green-400">Wish List</h4>
      </div>
      <div className="space-y-6 md:space-y-0 md:grid grid-cols-1 lg:grid-cols-3 gap-6">
        {books?.data?.wishlist?.length > 0 &&
          books?.data?.wishlist?.map((book: any) => <Book key={book?.bookId?._id} book={book?.bookId} />)}
      </div>
    </div>
  );
}
