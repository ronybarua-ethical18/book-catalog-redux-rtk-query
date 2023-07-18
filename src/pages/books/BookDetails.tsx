

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
      <div className="flex max-w-7xl mx-auto items-center border-b border-gray-300">
        <div className="w-[50%]">
          <img src={book?.image} alt="" />
        </div>
        <div className="w-[50%] space-y-3">
          <h1 className="text-3xl font-semibold">{book?.title}</h1>
          <p className="text-xl">Price: {book?.price}</p>
          {/* <ul className="space-y-1 text-lg">
            {product?.features?.map((feature: string) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul> */}
          <Button>Add to cart</Button>
        </div>
      </div>
    </>
  );
}
