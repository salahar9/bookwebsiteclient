import React from 'react'
import ReactDOM from 'react-dom/client'
import "./css/style.css"
import "./css/style2.css"
import  {Salah} from "./index.jsx"
import  {Login} from "./Components/Login"
// import * as React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import {Services} from './Components/services'
import {Header} from './Components/header'
import {Home} from './Components/Home'
import {BookDetails} from './Components/BookDetail'
const router = createBrowserRouter([
      {
        path: "/book/:id",
        element:<BookDetails/>,
      },
      {
        path: "/home",
        element:<Home/>,
      },
      {
        path: "/login",
        element: <Login />,
      },
  {
    path: "/",
    element: <Salah />,
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
	<div>
        <Header/>
	<RouterProvider router={router} />
</div>
)
