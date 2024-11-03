import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Root from './components/Root/Root.jsx';
import ErrorPage from './ErrorPage/ErrorPage.jsx';
import Home from './components/Home/Home.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import BookDetail from './components/BookDetail/BookDetail.jsx';
import ListedBooks from './components/ListedBooks/ListedBooks.jsx';
import { ToastContainer} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


const router = createBrowserRouter([
  {
    path: "/",
    errorElement:<ErrorPage></ErrorPage>,
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path:'/dashboard',
        element:<Dashboard></Dashboard>
      },
      {
        path:'books/:bookId',
        element:<BookDetail></BookDetail>,
        loader:()=> fetch('/booksData.json')
      },
      {
        path:'/listed-books',
        element:<ListedBooks></ListedBooks>,
        loader: () => fetch('/booksData.json')
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router ={router} />
    <ToastContainer />
  </StrictMode>,
)
