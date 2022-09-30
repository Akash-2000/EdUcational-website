import React from 'react'
import "./nodecard.css"
import {useNavigate} from "react-router-dom"
export default function Nodecard() {
    const navigate = useNavigate()
    const handleclick5=()=>{
  setTimeout(()=>{navigate("/node-video")},500)
      
 }
  return (
    <>
   {/*     Javscript video  card    */}
  <div class="card-wrap" onClick={handleclick5}>
  <div class="card-header six">
    <i class="fas fa-code"></i>
  </div>
  <div class="card-content">
    <h1 class="card-title">Node js</h1>
    <p class="card-text">Beginer to Advanced Full Course</p>
   <div class="card-action5"><i class="fa fa-heart" onClick={handleclick5}></i></div>
 </div>
</div>
</>
  )
}
