import "./typescript_video.css"
import React from "react"
import Navbar from "../../../Navbar/navbar";
import { useState, useEffect, useRef } from "react";


export default function Ts_video() {
    const [ src , setsrc] = useState("https://www.youtube.com/embed/zyGmIw9pT9k?modestbranding=1&rel=0&enablejsap")
    const handleclick =(e)=>{
           
        setsrc(e.target.getAttribute("src")
)  }
    useEffect(()=>{
       
    },[src])

  
  return (
    <div class = "total-width">
    <Navbar/>
    <div class="container">
        <div class="main-video">
           <div class="vid active" >
                
               <iframe id="player" src={src}></iframe>
                   
            </div>
           
         </div>
    <div class="video-list">
                <div class="vid active">
                     <div class="video-title" src="https://www.youtube.com/embed/zyGmIw9pT9k?modestbranding=1&rel=0&enablejsap"  onClick={handleclick} >01 Introduction to Typescript Typescript full course</div>
                </div>
        <div class="vid ">
              
              <div class="video-title" src="https://www.youtube.com/embed/X6RLMuoAIwA?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>02what is typescript Typescript full course </div>
        </div>
        <div class="vid">
            
            <div class="video-title" src="https://www.youtube.com/embed/UmtRGJm1scE?modestbranding=1&rel=0&enablejsapi=1"  onClick={handleclick}>03 Setting up the developement environment in typescript</div>
        </div>
        <div class="vid">
        <iframe class="video-shh" ></iframe>
            
            <div class="video-title" src="https://www.youtube.com/embed/_iEW30ceK_4?modestbranding=1&enablejsapi=1" onClick={handleclick}>04 First typescript program Typescript full course </div>
        </div>
        <div class="vid">
            <iframe class="video-shh"
               ></iframe>
            
            <div class="video-title"  src="https://www.youtube.com/embed/7wKF0go6sdk
?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>05 Configuring the typescript compiler</div>
        </div>
        <div class="vid"> 
            
                <iframe class="video-shh"
                   ></iframe>
                
            <div class="video-title"  src="https://www.youtube.com/embed/ZZakKd2GQm0?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>06 Debugging typescript applications</div>
        </div>
        <div class="vid">
                        <iframe class="video-shh"
                      
                      ></iframe>
            <div class="video-title"  src="https://www.youtube.com/embed/NxZPoTYTYSE?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>07 Built-in types typescript </div>
        </div>
        <div class="vid">

            <iframe class="video-shh"
               ></iframe>
                
            <div class="video-title"  src="https://www.youtube.com/embed/aNaVB842umA?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>08 The any type in typescript</div>
        </div>
        <div class="vid">
            <iframe class="video-shh"
               ></iframe>
            
            <div class="video-title"  src="https://www.youtube.com/embed/7OamhC0Elzo?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>09 Arrays in typescript  </div>
        </div>
        <div class="vid">
            
            <div class="video-title" src="https://www.youtube.com/embed/RK80xB8gfUQ
?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>10 Tuples in typescript </div>
        </div>
        <div class="vid">
            <iframe class="video-shh"
               ></iframe>
            
            <div class="video-title"   src="https://www.youtube.com/embed/DGur3fMVKr0?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>11 Enums in typescript</div>
        </div>
        <div class="vid">
            
            <div class="video-title" src="https://www.youtube.com/embed/JvZVsxOPtQE?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>12 Function in typescript   </div>
        </div>
        <div class="vid">
            
            <div class="video-title" src="https://www.youtube.com/embed/BVjTOICVzwc?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>13 Objects in typescript</div>
        </div>
        <div class="vid">
            <iframe class="video-shh"
               ></iframe>
            
            <div class="video-title"  src="https://www.youtube.com/embed/7gbL6Nyazuo?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>14 Type Aliases in typescript</div>
        </div>
        <div class="vid">

            <iframe class="video-shh"
               ></iframe>
            
            <div class="video-title"  src="https://www.youtube.com/embed/_IR0FtWfsLQ?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>15 Unions in typescript </div>
        </div>
        <div class="vid">
            
            <div class="video-title"  src="https://www.youtube.com/embed/ImwCYQnNd9I?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>16 Intersection type in typescript </div>
        </div>

        <div class="vid">
            <div class="video-title" src="https://www.youtube.com/embed/klex3M-W3ik
?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>17 Literal in typescript    
</div>
        </div>
        <div class="vid">
              
            <div class="video-title" src="https://www.youtube.com/embed/DMwlTJwGxAQ?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>18 Nullable types in typescript</div>
        </div>
        <div class="vid">
              
            <div class="video-title" src="https://www.youtube.com/embed/fHVSdXbNFWI?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>19 Optional chaining in typescript</div>
        </div>
    </div>
    </div>
    </div>      
  )
}
