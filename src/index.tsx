import React from 'react';
import {
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/400.css"; // Specify weight
import "@fontsource/poppins/400-italic.css"; // Specify weight and style
// import  Screening from './Pages/Routes/routes';
import { BrowserRouter,createBrowserRouter } from 'react-router-dom';
import Users from './Pages/tables/users';
import Matches from './Pages/tables/matches';
import Courts from './Pages/tables/courts';

const root = ReactDOM.createRoot(

  document.getElementById('root') as HTMLElement

);

const router = createBrowserRouter([
  {

    path: "/",

    element: <App/>,

  },

   

  {

    path: "/users",

    element: <Users/>,

  },

  {

    path: "/matches",

    element: <Matches/>,

  },

  {

    path: "/courts",

    element: <Courts/>,

  },

  ]);

root.render(
  <React.StrictMode>
<RouterProvider router={router} />
    
  </React.StrictMode>
);

