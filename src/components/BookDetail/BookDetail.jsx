import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import './BookDetail.css'
import { addToStoredReadList, addToWishlist } from '../../utilities/addToDb';

const BookDetail = () => {
    const {bookId} = useParams()
    const data = useLoaderData()
    
    const book = data.find(book => book.bookId === parseInt(bookId))
    
    // console.log(bookId)


    const handleMarkAsRead = (id) =>{
        addToStoredReadList(id)
    }

    const handleWishlist = (id) => {
        addToWishlist(id)
    }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen  ">
  <div className="hero-content flex-col lg:flex-row">
    <img 
      src={book.image}
      className="max-w-sm max-h-full rounded-lg shadow-2xl" />
    <div className='flex flex-col gap-y-4  pt-7 px-4'>
      <h1 className="text-5xl font-bold">{book.bookName}</h1>
      <p className="text-[20px] text-gray-500 pb-3 border-gray-300 border-b-2">By: {book.author}</p>
      <p className="text-[20px] text-gray-500 pb-3 border-gray-300 border-b-2">{book.category}</p>
      <p className='font-bold'>Review: <span className='text-gray-400 font-normal'>{book.review}</span></p>
      <div className='flex gap-3 items-center border-b-2 pb-3 border-gray-300'>
        <p className='font-bold'>Tag</p>
        <button className="btn text-green-600">#{book.tags}</button>
        <button className="btn text-green-600">#{book.tags}</button>
      </div>
      <div>
        <table>
           
           <tbody>
            <tr>
                <td className='text-gray-500'>Number of Pages:</td>
                <td>{book.totalPages}</td>
            </tr>
            <tr>
                <td className='text-gray-500'>Publisher:</td>
                <td>{book.publisher}</td>
            </tr>
            <tr>
                <td className='text-gray-500'>Year of Publishing:</td>
                <td>{book.yearOfPublishing}</td>
            </tr>
            <tr>
                <td className='text-gray-500'>Rating:</td>
                <td>{book.rating}</td>
            </tr>
           </tbody>
        </table>
      </div>
      <div className='flex gap-3'>
      <button className='w-max p-3 border-2 rounded-xl'onClick={()=>handleMarkAsRead(book.bookId)}>Mark as Read</button>
        <button className='w-28 p-3 border-2 rounded-xl bg-green-600 text-white' onClick={()=>addToWishlist(book.bookId)}>Wishlist</button>
        <Link to='/'><button className="btn btn-accent w-max">Back</button></Link>
      </div>
      
      
    </div>
  </div>
</div>
        </div>
    );
};

export default BookDetail;