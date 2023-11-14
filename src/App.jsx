
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Main from './components/Layout/Main';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          element:<Home></Home>,
          loader: ()=> fetch('https://jsonplaceholder.typicode.com/users')
        },
        {
          path:'/about',
          element:<About></About>
        },
        {
          path:'/contact',
          element:<Contact></Contact>
        }
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
