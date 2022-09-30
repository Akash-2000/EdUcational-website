import React from 'react'
import "./reactcard.css"
import {useNavigate} from "react-router-dom"
export default function Reactcard() {
    const navigate = useNavigate()
    const handleclick6=()=>{
  setTimeout(()=>{navigate("/react-video")},500)
      
 }
  return (
    <>
   {/*     react video  card    */}
  <div class="card-wrap" onClick={handleclick6}>
  <div class="card-header seven">
    <i class="fas fa-code"></i>
  </div>
  <div class="card-content">
    <h1 class="card-title">React</h1>
    <p class="card-text">Beginer to Advanced Full Course</p>
   <div class="card-action6"><i class="fa fa-heart" onClick={handleclick6}></i></div>
 </div>
</div>
</>
  )
}
