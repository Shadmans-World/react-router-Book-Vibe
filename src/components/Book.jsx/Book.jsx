import React from "react";
import { FaRegStar } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
const Book = ({ book }) => {
  return (
    <div className="card bg-base-100 border-2 border-gray-300">
      <figure className="h-[350px] p-5">
        <img
          className="h-full w-[300px] rounded-xl"
          src={book.image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body flex flex-col gap-y-3">
        <div className="flex gap-3 flex-wrap ">
          <button className="btn text-green-600">#{book.tags}</button>
          <button className="btn text-green-600">#{book.tags}</button>
        </div>

        <h2 className="card-title">{book.bookName}</h2>
        <p className="text-gray-700 pb-3 border-b border-dashed">
          By: {book.author}
        </p>

        <div className="flex justify-between w-full">
          <p className="text-gray-700">{book.category}</p>
          <div className="rating">
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-green-500"
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-green-500"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-green-500"
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-green-500"
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-green-100"
            />
          </div>
        </div>

        <NavLink to={`/books/${book.bookId}`} className="w-full">
          <button className="btn text-green-700 w-full">More Details</button>
        </NavLink>

        {/* <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div> */}
      </div>
    </div>
  );
};

export default Book;
