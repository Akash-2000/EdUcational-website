import React from 'react'
import "./jscard.css"
import {useNavigate} from "react-router-dom"
export default function Jscard() {
    const navigate = useNavigate()
    const handleclick3=()=>{
  setTimeout(()=>{navigate("/js-video")},500)
      
 }
  return (
    <>
   {/*     Javscript video  card    */}
  <div class="card-wrap" onClick={handleclick3}>
  <div class="card-header three">
    <i class="fas fa-code"></i>
  </div>
  <div class="card-content">
    <h1 class="card-title">Javascript</h1>
    <p class="card-text">Beginer to Advanced Full Course</p>
   <div class="card-action2"><i class="fa fa-heart" onClick={handleclick3}></i></div>
 </div>
</div>
</>
  )
}
