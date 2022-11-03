import React from 'react'
import "./typescript-card.css"
import {useNavigate} from "react-router-dom"
import { SiTypescript } from "react-icons/si";


export default function Scriptcard() {
    const navigate = useNavigate()
    const handleclick7=()=>{
  setTimeout(()=>{navigate("/script-video")},500)
      
 }
  return (
    <>
   {/*     react video  card    */}
  <div class="card-wrap" onClick={handleclick7}>
  <div class="card-header eight">
    <i><SiTypescript/></i>
  </div>
  <div class="card-content">
    <h1 class="card-title">Type script</h1>
    <p class="card-text">Beginer to Advanced Full Course</p>
   <div class="card-action7"><i class="fa fa-heart" onClick={handleclick7}></i></div>
 </div>
</div>
</>
  )
}
