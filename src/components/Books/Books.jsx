import React, { useEffect, useState } from 'react';
import Book from '../Book.jsx/Book';

const Books = () => {

    const [books,setBooks] = useState([])
    useEffect(()=>{
        fetch('./booksData.json')
        .then(res=> res.json())
        .then(data => setBooks(data))
    },[])
    return (
        <div className='mt-10 mb-10'>
            <h3 className='text-center text-4xl font-bold mb-5'>Books: {books.length}</h3>
            <div className='grid grid-cols-3 gap-3'>
                {
                    books.map(book => <Book key={book.bookId} book={book}></Book>)
                }
                
            </div>
        </div>
    );
};

export default Books;