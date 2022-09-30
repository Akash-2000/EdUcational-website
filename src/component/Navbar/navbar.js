import React, { useState } from 'react'
import "./navbar.css"
import { NavLink } from 'react-router-dom'
export default function Navbar() {
  const [click,setclick]= useState(false)
  const handleclick = ()=>{
    setclick(click)
  }
  return (
   <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
     <form>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Course</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Compiler</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Article</a>
        </li>
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <li>
        <button class="btn btn-outline-success" type="submit">Login</button>
        
      </li>
      </ul>
    </div>
    </form>
    </div>
</nav>
  )
}