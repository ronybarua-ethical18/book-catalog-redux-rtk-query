import React from 'react'
import { useParams } from 'react-router-dom';
import Form from './Form';
import { useSingleBookQuery } from '@/redux/features/books/bookApi';


export default function EditBook() {
    const { id } = useParams();
    const { data: book, isLoading, isError, isSuccess } = useSingleBookQuery(id);

    console.log(book)

    let content = null;
    if(isSuccess && book?.data){
        content = <Form book={book?.data} />
    }

  return (
    <div className="container">
        <div className="p-8 overflow-hidden bg-white shadow-cardShadow rounded-md max-w-xl mx-auto">
          <h4 className="mb-8 text-2xl font-bold text-center">Edit Book</h4>
         {content}
        </div>
      </div>
  )
}
