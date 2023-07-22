import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useAddBookMutation } from '@/redux/features/books/bookApi';
import React, { ReactNode, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function AddForm({ book }: any): ReactNode {
 
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [img_url, setImgUrl] = useState("");
  const [price, setPrice] = useState("");
  const [publication_date, setPublicationDate] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate()

  const [addBook, { data: books }] =
    useAddBookMutation();
  

  return (
    <div className="p-4 shadow-md">
      <form className="book-htmlForm">
        <div className="space-y-2">
          <label htmlFor="">Book Title</label>
          <Input
            required
            defaultValue={title}
            className="text-input"
            type="text"
            name="title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="">Author</label>
          <Input
            required
            defaultValue={author}
            className="text-input"
            type="text"
            name="author"
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="">Image Url</label>
          <Input
            required
            value={img_url}
            className="text-input"
            type="text"
            name="img_url"
            onChange={(e) => setImgUrl(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="">Publication date</label>
          <Input
            required
            value={publication_date}
            className="text-input"
            type="text"
            name="publication_date"
            onChange={(e) => setPublicationDate(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-2 gap-8 pb-4">
          <div className="space-y-2">
            <label htmlFor="lws-price">Genre</label>
            <Input
              required
              defaultValue={genre}
              className="text-input"
              type="text"
              name="genre"
              onChange={(e) => setGenre(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="">Price</label>
            <Input
              required
              defaultValue={price}
              className="text-input"
              type="number"
              name="price"
              min="1"
              max="5"
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
        </div>

        <Textarea
          placeholder="description"
          defaultValue={description}
          onChange={(e) => setDescription(e.target.value)}
        ></Textarea>
        {/* <button type="submit" disabled={isLoading} className="submit" id="lws-submit">
        Update Book
      </button> */}
      </form>
      <Button
        className="w-full mt-5"
        onClick={() =>
          addBook({
            data: {
              title,
              author,
              img_url,
              price,
              publication_date,
              description,
              genre,
            },
          }).unwrap()
          .then((payload) => {
            navigate("/books")
            toast.success(payload.message)
        })
          .catch((error) => toast.error(error.data.message))
        }
      >
        Add Book
      </Button>
    </div>
  );
}
