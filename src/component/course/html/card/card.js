import React from 'react';
import "./card.css";
import { DiHtml5 } from "react-icons/di";
import {useNavigate} from "react-router-dom"
export default function HtmlCard() {
  const navigate = useNavigate()
 const handleclick=()=>{
  setTimeout(()=>{navigate("/html-video")},500)
      
 }
 
 
  /*  const handleclick3=()=>{
  setTimeout(()=>{navigate("/js-video")},500)
      
 } */
return(
<>
  <div class="card-wrap" onClick={handleclick}>
  <div class="card-header one1">
    
    <i class="fhtml"><DiHtml5/></i>
  </div>
  <div class="card-content">
    <h1 class="card-title">HTML</h1>
    <p class="card-text">Beginer to Advanced Full Course</p>
   <div class="card-action"><i class="fa fa-heart" onClick={handleclick}></i></div>
 </div>
</div>



</>


  )
}
