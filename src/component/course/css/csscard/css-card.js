import React from 'react'
import "./cscCard.css"
import { useNavigate } from 'react-router-dom'
export default function CssCard() {
      const navigate = useNavigate()
    const handleclick2=()=>{
 setTimeout(()=>{navigate("/css-video")},500)
      
 }
  return (
  <div class="card-wrap" onClick={handleclick2}>
  <div class="card-header two">
    <i class="fas fa-code"></i>
  </div>
  <div class="card-content">
    <h1 class="card-title">CSS</h1>
    <p class="card-text">Beginer to Advanced Full Course</p>
   <div class="card-action1"><i class="fa fa-heart" onClick={handleclick2}></i></div>
 </div>
</div>
  )
}
