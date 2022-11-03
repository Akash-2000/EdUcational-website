import React from 'react'
import { useNavigate } from 'react-router-dom'
import { SiMongodb } from "react-icons/si";
import "./mongocard.css"

export default function Mongocard() {
 const navigate = useNavigate()
    const handleclick4=()=>{
  setTimeout(()=>{navigate("/mongoDb-video")},500)
      
 }
  return (
    <>
   {/*     Javscript video  card    */}
  <div class="card-wrap" onClick={handleclick4}>
  <div class="card-header four">
    <i><SiMongodb/></i>
  </div>
  <div class="card-content">
    <h1 class="card-title">MongoDB</h1>
    <p class="card-text">Beginer to Advanced Full Course</p>
   <div class="card-action3"><i class="fa fa-heart" onClick={handleclick4}></i></div>
 </div>
</div>
</>
  )
}