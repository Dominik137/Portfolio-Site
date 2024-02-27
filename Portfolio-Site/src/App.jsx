import Layout from './Components/Layout';
import './App.css'
import {
  createBrowserRouter,
  BrowserRouter,
  RouterProvider,
  Routes,
  Route,
  Router,
  Link
} from "react-router-dom";


function App() {

  return (
    <>
     <BrowserRouter>
     
      <Layout />

    </BrowserRouter>
    </>
  )
}

export default App
