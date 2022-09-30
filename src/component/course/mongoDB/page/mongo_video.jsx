import "./mongo_video.css"
import React from "react"

import { useState, useEffect, useRef } from "react";


export default function Mongo_video() {
    const [ src , setsrc] = useState("https://www.youtube.com/embed/gVqsGqzuiBs")
    const handleclick =(e)=>{
           
        setsrc(e.target.getAttribute("src")
)  }
    useEffect(()=>{
       
    },[src])

  
  return (

    <div class="container">
        <div class="main-video">
           <div class="vid active" >
                
               <iframe id="player" src={src}></iframe>
                   
            </div>
           
         </div>
    <div class="video-list">
                <div class="vid active">
                     <div class="video-title" src="https://www.youtube.com/embed/gVqsGqzuiBs?modestbranding=1&rel=0&enablejsap"  onClick={handleclick} >01 Introduction to Mongodb</div>
                </div>
        <div class="vid ">
              
              <div class="video-title" src="https://www.youtube.com/embed/itPEaEopSM8?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>02 Data for practice    Full tutorial for beginners  </div>
        </div>
        <div class="vid">
            
            <div class="video-title" src="https://www.youtube.com/embed/9RqVeRFKaCY?modestbranding=1&rel=0&enablejsapi=1"  onClick={handleclick}>03 Install & set up mongoose    Full tutorial for beginners</div>
        </div>
        <div class="vid">
        <iframe class="video-shh" ></iframe>
            
            <div class="video-title" src="https://www.youtube.com/embed/UstruGsdB9k?modestbranding=1&enablejsapi=1" onClick={handleclick}>04 Create a Model    Full tutorial for beginners </div>
        </div>
        <div class="vid">
            <iframe class="video-shh"
               ></iframe>
            
            <div class="video-title"  src="https://www.youtube.com/embed/GfYVAZJ1Kl8?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>05 Create & Save a Record of a Model   Full tutorial for beginners </div>
        </div>
        <div class="vid"> 
            
                <iframe class="video-shh"
                   ></iframe>
                
            <div class="video-title"  src="https://www.youtube.com/embed/txe-OsuQyUQ?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>06 Create Many Records with model.create()</div>
        </div>
        <div class="vid">
                        <iframe class="video-shh"
                           ></iframe>
           
            <div class="video-title"  src="https://www.youtube.com/embed/S7onUsljV7M?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>07 Use model.find() to seach your database</div>
        </div>
        <div class="vid">

            <iframe class="video-shh"
               ></iframe>
                
            <div class="video-title"  src="https://www.youtube.com/embed/eV-1FhXWDLQ?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>08 Use model.findOne() to return a single document</div>
        </div>
        <div class="vid">
            <iframe class="video-shh"
               ></iframe>
            
            <div class="video-title"  src="https://www.youtube.com/embed/EQ64Gb7yrgc?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>09 model.findById() to search database By_id </div>
        </div>
        <div class="vid">
            
            <div class="video-title" src="https://www.youtube.com/embed/ZdWcHnUPqBI
?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>10 Perform classic updates running find,edit,save    
</div>
        </div>
        <div class="vid">
            <iframe class="video-shh"
               ></iframe>
            
            <div class="video-title"   src="https://www.youtube.com/embed/NnGKyCzkzuw?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>11 Perform new updates on a document using model.findOneAndUpdate</div>
        </div>
        <div class="vid">
            
            <div class="video-title" src="https://www.youtube.com/embed/mXUIklBPiqs?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>12 Delete one Document with model.FindById Andremove </div>
        </div>
        <div class="vid">
            
            <div class="video-title" src="https://www.youtube.com/embed/YWrsjoo1ApM?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>13 Delete Many Documents with model.remove() </div>
        </div>
        <div class="vid">
            <iframe class="video-shh"
               ></iframe>
            
            <div class="video-title"  src="https://www.youtube.com/embed/BU64auWbteo?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>14 chain search query helpers toN narrow searchresults</div>
        </div>
       
    </div>
    </div>
      
  )
}
