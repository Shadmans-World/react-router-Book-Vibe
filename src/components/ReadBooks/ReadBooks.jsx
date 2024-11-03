import React, { useEffect, useState } from 'react';

const ReadBooks = ({books}) => {
    const [readBooks, setReadBooks]= useState([])
    useEffect(()=>{
        fetch('/booksData.json')
        .then(res => res.json())
        .then(data => setReadBooks(data))
    },[])
    return (
        <div className='flex flex-row'>
            {
                readBooks.map(book => <div>
                    <img src={book.image} alt="" />
                </div>)
            }
        </div>
    );
};

export default ReadBooks;