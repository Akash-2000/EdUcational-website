import "./node_video.css"
import React from "react"

import { useState, useEffect, useRef } from "react";


export default function Node_video() {
    const [ src , setsrc] = useState("https://www.youtube.com/embed/tq4wyQzZPjU?modestbranding=1&rel=0&enablejsap")
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
                     <div class="video-title" src="https://www.youtube.com/embed/tq4wyQzZPjU?modestbranding=1&rel=0&enablejsap"  onClick={handleclick} >01 Nodejs Installation  Node jsull Course</div>
                </div>
        <div class="vid ">
              
              <div class="video-title" src="https://www.youtube.com/embed/2GOu7zCkgPc?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>02 Working with Modules Nodejs</div>
        </div>
        <div class="vid">
            
            <div class="video-title" src="https://www.youtube.com/embed/zynWTofTqp0?modestbranding=1&rel=0&enablejsapi=1"  onClick={handleclick}>03 Event module & Event Emitter class Nodejsull course</div>
        </div>
        <div class="vid">
        <iframe class="video-shh" ></iframe>
            
            <div class="video-title" src="https://www.youtube.com/embed/CeGYyENUcTk?modestbranding=1&enablejsapi=1" onClick={handleclick}>04 Working with theile system module </div>
        </div>
        <div class="vid">
            <iframe class="video-shh"
               ></iframe>
            
            <div class="video-title"  src="https://www.youtube.com/embed/5zuoxCClj_U?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>05 File system module part 2 nodejs</div>
        </div>
        <div class="vid"> 
            
                <iframe class="video-shh"
                   ></iframe>
                
            <div class="video-title"  src="https://www.youtube.com/embed/PZgCrhnvCtE?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>06Readable & writable streams nodejs</div>
        </div>
        <div class="vid">
                        <iframe class="video-shh"
                           ></iframe>
           
            <div class="video-title"  src="https://www.youtube.com/embed/Gc-1FvUMJEI?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>07 Why should use streams nodejs</div>
        </div>
        <div class="vid">

            <iframe class="video-shh"
               ></iframe>
                
            <div class="video-title"  src="https://www.youtube.com/embed/kx5e_ObHThs?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>08Pipes & pipe chaining Nodejs </div>
        </div>
        <div class="vid">
            <iframe class="video-shh"
               ></iframe>
            
            <div class="video-title"  src="https://www.youtube.com/embed/tVqNeJG7zcU?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>09 Create a Http Server using http module </div>
        </div>
        <div class="vid">
            
            <div class="video-title" src="https://www.youtube.com/embed/7i7AX_zVU_w
?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>10 Serving staticiles with http &ile system modules nodejs</div>
        </div>
        <div class="vid">
            <iframe class="video-shh"
               ></iframe>
            
            <div class="video-title"   src="https://www.youtube.com/embed/Y5imsAYQ4YI?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>11 Create package.json using npm init </div>
        </div>
        <div class="vid">
            
            <div class="video-title" src="https://www.youtube.com/embed/G9MXgsqty9k?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>12 Installing packages using npm </div>
        </div>
        <div class="vid">
            
            <div class="video-title" src="https://www.youtube.com/embed/p8hT-67V2sQ?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>13 Semantic Versioning </div>
        </div>
        <div class="vid">
            <iframe class="video-shh"
               ></iframe>
            
            <div class="video-title"  src="https://www.youtube.com/embed/TQMUYL3THi4?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>14 Getting Started with Express webramework </div>
        </div>
        <div class="vid">

            <iframe class="video-shh"
               ></iframe>
            
            <div class="video-title"  src="https://www.youtube.com/embed/BoY-Ju8sdCE?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>15 Working with Express get Request Nodejs </div>
        </div>
        <div class="vid">
            
            <div class="video-title"  src="https://www.youtube.com/embed/YIauG9cdiPI?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>16 Serving staticiles with Express </div>
        </div>

        <div class="vid">
            <div class="video-title" src="https://www.youtube.com/embed/WJpgFi-IXPE
?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>17 Http post request w/express & body parser module   
</div>
        </div>
        <div class="vid">
              
            <div class="video-title" src="https://www.youtube.com/embed/rGoAH_eRkAA?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>18 Working with Json data - express & body parser</div>
        </div>
        <div class="vid">
              
            <div class="video-title" src="https://www.youtube.com/embed/z6CmcacBOsM?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>19 Input Validation with express & JOI</div>
        </div>
        <div class="vid">
              
            <div class="video-title" src="https://www.youtube.com/embed/FuXCelTeCtM?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>20 User Input Validation with express and JOI part 2 </div>
        </div>
        <div class="vid">
              
            <div class="video-title" src="https://www.youtube.com/embed/kLycchcmic4?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>21 Middleware Nodejs </div>
        </div>
        <div class="vid">
              
            <div class="video-title" src="https://www.youtube.com/embed/vMgs8csNtJU?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>22 Working with the express router</div>
        </div>

    </div>
    </div>
      
  )
}
