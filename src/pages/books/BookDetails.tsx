

import { Button } from '@/components/ui/button';
import { useSingleBookQuery } from '@/redux/features/books/bookApi';
import { IProduct } from '@/types/globalTypes';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function BookDetails() {
  const { id } = useParams();

  const { data: book, isLoading, error } = useSingleBookQuery(id);

  console.log("data", book)

  return (
    <>
      <div className="flex max-w-7xl mx-auto items-start  ">
        <div className="w-[50%] m-auto">
          <img src={book?.data?.img_url} alt="" />
        </div>
        <div className="ml-10">
          <h1 className="text-3xl font-semibold">{book?.data?.title}</h1>
          <p className="text-xl font-semibold mb-10">Tk. {book?.data?.price}</p>
          <p className="text-xl">{book?.data?.description}</p>
          {/* <ul className="space-y-1 text-lg">
            {product?.features?.map((feature: string) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul> */}
        </div>
      </div>
    </>
  );
}
