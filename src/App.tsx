import React from 'react';
import Toolbar from './Pages/Sidebar/sidebar';
import Home from './Pages/Home/home';
import { Outlet } from 'react-router';



// import BottomNavigation from './Pages/BottomNavigation/bottomnavigation';

function App() {
  return (
    <>
    {/* <Home/> */}
  <div className='flex '>
  <Toolbar/>
    <Outlet/>
  </div>
   
    </>
  );
}

export default App;
