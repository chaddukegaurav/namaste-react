import React, {lazy, Suspense, useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';
import Body from './components/Body';
import Header from './components/Header';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'; //these are routers features
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error'
import RestaurantMenu from './components/RestaurantMenu';
// import Grocery from './components/Grocery';
import UserContext from './utils/UserContext';

const Grocery = lazy(()=> import('./components/Grocery')) 

const App = () => {

  const [userName, setUserName] = useState()

  useEffect(()=>{

    const data = {
      name : "Chadduke"
    }
    setUserName(data.name)
  },[])
  return (
    <UserContext.Provider value={{ loggedInUser : userName, setUserName}}>
    <div className='app'>
      <Header/>
      <Outlet/>
    </div>
    </UserContext.Provider>
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
      },
      {
        path : '/grocery',
        element : <Suspense fallback={<h1>Loading....</h1>}><Grocery/></Suspense>
      }
    ],
    errorElement: <Error/>,
  },
  
])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appR}/>);

