import React, { useEffect } from "react";
// import { useDeleteBookMutation } from "../../features/api/apiSlice";
import { useNavigate } from "react-router-dom";

interface BookProps {
  book: {
    title: string;
    author: string;
    img_url: string;
    genre: number;
    _id:any
  };
}

export default function Book({ book }: BookProps): JSX.Element{
  const navigate = useNavigate();
  const { title, img_url, author, genre, _id } = book;
  // const [deleteBook, { isLoading, isError, isSuccess }] =
  //   useDeleteBookMutation();
  // const handleDelete = () => {
  //   deleteBook(id);
  // };
  return (
    <div className="book-card shadow-md p-4 flex items-center ">
      <img
        className="h-[240px] w-[170px] object-cover"
        src={img_url}
        alt="book"
      />
      <div className="flex-1 h-full pr-2 pt-2 flex flex-col">
        <div className="flex items-center justify-between">
          {/* {featured && <span className="lws-badge">featured</span>} */}
          {/* <div className="text-gray-500 space-x-2">
            <button onClick={()=> navigate(`/edit/${_id}`)} className="lws-edit">
              <svg
                fill="none" 
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                />
              </svg>
            </button>
          </div> */}
        </div>

        <div className="space-y-2 mt-4 h-full ml-4">
          <h4 className="text-2xl">{title}</h4>
          <p className="text-xl">{author}</p>
          
          {/* <p className="lws-price">BDT {price}</p> */}
        </div>
      </div>
    </div>
  );
}
