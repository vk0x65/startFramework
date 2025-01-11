import Layout from './Components/Layout';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Portfolio from './Components/Portfolio';
import NotFound from './Components/NotFound';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'

function App() {
  let routes = createBrowserRouter([
    {
      path: "", 
      element: <Layout />, 
      children: [
      {index: true, element: <Home />},
      {path:"about", element: <About />},
      {path:"portfolio", element: <Portfolio />},
      {path:"contact", element: <Contact />},
      {path:"*", element: <NotFound />}
      ]
    }
  ])
  return (
    <>
    <RouterProvider router={routes}></RouterProvider>
    </>
  )
}

export default App
