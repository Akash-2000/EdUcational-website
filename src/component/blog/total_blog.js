import './total_blog.css';
import Navbar from '../Navbar/navbar';
import Home from './Pages/home/home';
import Single from './Pages/single/single';
import Write from './write/write';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function Total_blog() {
  return (
    <>
    <Navbar/>
    <Home/>
    </>

  );
}

export default Total_blog;
