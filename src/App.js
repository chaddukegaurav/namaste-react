import React from 'react';
import ReactDOM from 'react-dom/client';
import Body from './components/Body';
import Header from './components/Header';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'; //these are routers features
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error'
import RestaurantMenu from './components/RestaurantMenu';

const App = () => {
  return (
    <div className='app'>
      <Header/>
      <Outlet/>
    </div>
  );
};

//an info that will tell browser what will happen in that link

const appR= createBrowserRouter([
  {
    path: '/',
    element:<App/>,
    
    children : [
      {
        path:'/',
        element:<Body/>
      },
      {
        path:'/About',
        element:<About/>
      },
      {
        path: '/contact',
        element: <Contact/>
      },
      {
        path : '/restaurants/:resId',
        element : <RestaurantMenu/>,
      }
    ],
    errorElement: <Error/>,
  },
  
])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appR}/>);

