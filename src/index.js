import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./error-page";
import { getContact } from './Contact';
import Reservetable from './Reservetable';
import Menu from './Menu';
import Checkout from './Checkout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/contact",
    element: <getContact />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/reservetable",
    element: <Reservetable />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/menu",
    element: <Menu />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
    errorElement: <ErrorPage />,
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
