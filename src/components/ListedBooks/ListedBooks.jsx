import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredReadList } from "../../utilities/addToDb";
import Book from "../Book.jsx/Book";
import ReadBooks from "../ReadBooks/ReadBooks";
const ListedBooks = ({book}) => {

    const [readList, setReadList]= useState([])
    const allBooks = useLoaderData();

    useEffect(()=>{
        const storedReadList = getStoredReadList()
        
        const readBookList = allBooks.filter(book => storedReadList.includes(book.bookId))
        console.log(storedReadList,readBookList)
        setReadList(readBookList)
    },[])
  return (
    <div>
      <h3 className="text-3xl font-bold  mb-10 text-center">Books</h3>
      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel>
          <h2 className="text-2xl">Books I Read: {readList.length}</h2>
          <div className="grid grid-cols-3 gap-3 mt-3 mb-3">
          {
            readList.map(book => <Book key={book.bookId} book={book}></Book>)
          }
          </div>
          
        </TabPanel>
        <TabPanel>
        <h2 className="text-2xl">My Wish List</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
