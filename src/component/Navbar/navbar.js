import React, { useState } from 'react'
import "./navbar.css"
import { Navigate, useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react';
import {Link} from "react-router-dom"
import { Context } from '../../context/context'
import  SearchBar  from '../Youtube/components/SearchBar';
export default function Navbar() {
     const {user,dispatch} = useContext(Context);
     console.log(user);
  let navigate = useNavigate()
  const handlelogin = ()=>{
      console.log("i clicked");
      navigate("/login")
  }
  const handlelogout = ()=>{
    dispatch({type:"LOGIN_FAILURE"})
    navigate("/login")
  }
  const handlecompiler = ()=>{
     navigate("/compiler")
  }
  const handleblog = ()=>{
     navigate("/totalblog")
  }
  const handleCourse = ()=>{
    navigate("/allcards")
  }
  const handleDoubts = ()=>{
    navigate("/search_engine")
  }
  const handleYoutube = ()=>{
    navigate("/youtube")
  }
  return (
  <>
   <nav class="navbar navbar-expand-lg red fontColor">
  <div class="container-fluid">
    <a class="navbar-brand text-light" href="#">  <img src="https://avatars.githubusercontent.com/u/91174414?v=4" width="50" height="50" class="d-inline-block  align-text-center rounded-circle  border-light" alt=""/>
     Revildo code</a>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
       
        <li class="nav-item ">
          <a class="nav-link nav-cor text-light"   onClick={handleCourse}>Course</a>
        </li>
        <li class="nav-item">
          <a class="nav-link nav-cor text-light"  onClick={handleDoubts}>Doubts?</a>
        </li>
           <li class="nav-item">
          <a class="nav-link nav-cor text-light"  onClick={handleYoutube}>Search</a>
        </li>
        <li class="nav-item">
          <a class="nav-link nav-cor text-light" onClick={handlecompiler}>Compiler</a>
        </li>
        <li class="nav-item">
          <a class="nav-link nav-cor text-light" onClick={handleblog}>Blog</a>
        </li>
           </ul>
        
          <form class="d-flex">
          <a class="nav-link text-light"onClick={handlelogout}>{user && "Logout"}</a>
            {
                
                user? (" "):
                   (   
        <button class="btn btn-outline-success nav-cor text-light" type="submit" onClick={handlelogin}>Login</button>
                         ) 
}
        </form>
  
    </div>

    </div>
</nav>

</>
  )
}