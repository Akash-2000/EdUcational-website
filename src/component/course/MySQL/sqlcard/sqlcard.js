import React from 'react'
import "./sqlcard.css"
import {useNavigate} from "react-router-dom"
export default function Sqlcard() {
    const navigate = useNavigate()
    const handleclick4=()=>{
  setTimeout(()=>{navigate("/sql-video")},500)
      
 }
  return (
    <>
   {/*     Javscript video  card    */}
  <div class="card-wrap" onClick={handleclick4}>
  <div class="card-header five">
    <i class="fas fa-code"></i>
  </div>
  <div class="card-content">
    <h1 class="card-title">My SQL</h1>
    <p class="card-text">Beginer to Advanced Full Course</p>
   <div class="card-action4"><i class="fa fa-heart" onClick={handleclick4}></i></div>
 </div>
</div>
</>
  )
}
