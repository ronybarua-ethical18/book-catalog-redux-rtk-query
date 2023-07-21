import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { usePostReviewMutation, useSingleBookQuery } from '@/redux/features/books/bookApi';
import { IProduct } from '@/types/globalTypes';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function BookDetails() {
  const { id } = useParams();

  const { data: book, isLoading, error } = useSingleBookQuery(id);
  const [postReview, {data:review}] = usePostReviewMutation()
  const [comment, setComment] = useState('')



  return (
    <>
      <div className="flex max-w-7xl mx-auto items-start mt-10">
       
        <div className="w-[50%] m-auto">
          <img src={book?.data?.img_url} alt="" />
         
        </div>
        <div className="ml-10">
          <div className="flex justify-between">

          <h1 className="text-3xl font-semibold">{book?.data?.title}</h1>
          <div className='flex text-right space-x-2'>
          <Link to={`/edit-book/${id}`}><Button>Edit</Button></Link>
          <Button>Delete</Button>
        </div>
          </div>
          <p className="text-xl font-semibold mb-5">Tk. {book?.data?.price}</p>
          <div>
            <h2 className="text-md font-medium">
              Author: {book?.data?.author}
            </h2>
            <h2 className="text-md font-medium">Genre: {book?.data?.genre}</h2>
            <h2 className="text-md font-medium mb-5">
              Publication date: {book?.data?.publication_date}
            </h2>
          </div>
          <p className="text-xl">{book?.data?.description}</p>
          {/* <ul className="space-y-1 text-lg">
            {product?.features?.map((feature: string) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul> */}
        </div>
      </div>
      <div className="flex max-w-7xl mx-auto">
        <div className="mt-10 w-full">
          <Textarea placeholder="Write a review" name="comment" onChange={(e) => setComment(e.target.value)} />
          <div className="flex justify-end mt-5">
            <Button onClick={() =>postReview({id:id, data:{
              comment:comment
            }}) }>Submit</Button>
          </div>

          <div>
            <h1 className='text-3xl font-bold mt-5 mb-5'>Reviews</h1>
            {
              book?.data?.reviews?.map((review:any) =>(
                <div className="mb-3">
                  <h1 className="font-medium">{review?.user}</h1>
                  <h1>{review?.comment}</h1>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </>
  );
}
