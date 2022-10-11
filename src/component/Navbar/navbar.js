import React, { useState } from 'react'
import "./navbar.css"
import { Navigate, useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react';
import { Context } from '../../context/context'
import  SearchBar  from '../Youtube/components/SearchBar';
export default function Navbar() {
     const {user,dispatch} = useContext(Context);
     console.log(user);
  let navigaete = useNavigate()
  const handlelogin = ()=>{
      console.log("i clicked");
      navigaete("/login")
  }
  const handlelogout = ()=>{
    dispatch({type:"LOGIN_FAILURE"})
    navigaete("/login")
  }
  const handlecompiler = ()=>{
     navigaete("./compiler")
  }
  const handleblog = ()=>{
     navigaete("/totalblog")
  }
  return (
   <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand " href="#">  <img src="https://avatars.githubusercontent.com/u/91174414?v=4" width="50" height="50" class="d-inline-block align-top logo-img" alt=""/>
     Revildo code</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
     <form>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
       
        <li class="nav-item">
          <a class="nav-link" href="/allcards">Course</a>
        </li>
           <li class="nav-item">
          <a class="nav-link" href="/youtube"><SearchBar/></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" onClick={handlecompiler}>Compiler</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" onClick={handleblog}>Blog</a>
        </li>
         <li className="nav-item">
          <a class="nav-link"onClick={handlelogout}>{user && "Logout"}</a></li>
            {
                
                user? (" "):
                   (   <li>
        <button class="btn btn-outline-success" type="submit" onClick={handlelogin}>Login</button>
        
      </li>                   )
}
     </ul>
    </div>
    </form>
    </div>
</nav>
  )
}