import React from "react";
// import { useGetBooksQuery } from "../../features/api/apiSlice";
// import Book from "./Book";

export default function Books() {
  // const { data: books, isLoading, isSuccess, isError } = useGetBooksQuery();
  // let content = null;

  // if (!isLoading && books?.length > 0) {
  //   content = books.map((book:any) => <Book key={book?.id} book={book} />);
  // }
  return (
    <div className="order-2 xl:-order-1">
      <div className="flex items-center justify-between mb-12">
        <h4 className="mt-2 text-xl font-bold text-green-400">Book List</h4>

        <div className="flex items-center space-x-4">
          <button className="lws-filter-btn active-filter">All</button>
          <button className="lws-filter-btn ">Featured</button>
        </div>
      </div>
      <div className="space-y-6 md:space-y-0 md:grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* {content} */}
        {[]}
      </div>
    </div>
  );
}
