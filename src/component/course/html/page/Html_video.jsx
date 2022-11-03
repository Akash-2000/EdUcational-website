import "./Html_video.css"
import React from "react"
import Navbar from "../../../Navbar/navbar";
import { useState, useEffect, useRef } from "react";
const props = "https://www.youtube.com/embed/VeIh9hQsZSA?modestbranding=1&rel=0&enablejsapi=1"

export default function Html_video() {
    const [ src , setsrc] = useState("https://www.youtube.com/embed/VeIh9hQsZSA?modestbranding=1&rel=0&enablejsap")
    const handleclick =(e)=>{
           
        setsrc(e.target.getAttribute("src")
)  }
    useEffect(()=>{
       

    },[src])

  
  return (
    <div class="total-width">
    <Navbar/>
    <div class="container">
        <div class="main-video">
           <div class="vid active1" >
                
               <iframe id="player" src={src}></iframe>
                   
            </div>
           
         </div>
    <div class="video-list">
                <div class="vid active">
                     <div class="video-title" src="https://www.youtube.com/embed/VeIh9hQsZSA?modestbranding=1&rel=0&enablejsap"  onClick={handleclick} >01 Introduction in HTML</div>
                </div>
        <div class="vid ">
              
              <div class="video-title" src="https://www.youtube.com/embed/dGugzI2V10U?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>02 Heading in HTML</div>
        </div>
        <div class="vid">
            <iframe class="video-shh" 
               ></iframe>
            
            <div class="video-title" src="https://www.youtube.com/embed/BN1Xp9uSNSk?modestbranding=1&rel=0&enablejsapi=1"  onClick={handleclick}>03 paragraph in HTML</div>
        </div>
        <div class="vid">
        <iframe class="video-shh" ></iframe>
            
            <div class="video-title" src="https://www.youtube.com/embed/eI342Xg6exg&enablejsapi=1" onClick={handleclick}>04 Formatting in HTML</div>
        </div>
        <div class="vid">
            <iframe class="video-shh"
               ></iframe>
            
            <div class="video-title"  src="https://www.youtube.com/embed/hGFDSnkQtt0?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>05 stying in HTML</div>
        </div>
        <div class="vid"> 
            
                <iframe class="video-shh"
                   ></iframe>
                
            <div class="video-title"  src="https://www.youtube.com/embed/O4Hx7-DZQmI?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>06 Elements in HTML</div>
        </div>
        <div class="vid">
                        <iframe class="video-shh"
                           ></iframe>
           
            <div class="video-title"  src="https://www.youtube.com/embed/cKalRqravJ8?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>07 Attributes in HTML</div>
        </div>
        <div class="vid">

            <iframe class="video-shh"
               ></iframe>
                
            <div class="video-title"  src="https://www.youtube.com/embed/mAjKy3y9fAQ?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>08 Quotation in HTML</div>
        </div>
        <div class="vid">
            <iframe class="video-shh"
               ></iframe>
            
            <div class="video-title"  src="https://www.youtube.com/embed/EGgfn52dHpk?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>09 Abbberivation in HTML</div>
        </div>
        <div class="vid">
            <iframe class="video-shh" 
               ></iframe>
            
            <div class="video-title" src="https://www.youtube.com/embed/PEGEO5G23PQ?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>10 Cite tag in HTML</div>
        </div>
        <div class="vid">
            <iframe class="video-shh"
               ></iframe>
            
            <div class="video-title"   src="https://www.youtube.com/embed/t0Gv4nUEyGs?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>11 inline CSS|internal CSS| external CSS in HTMLL</div>
        </div>
        <div class="vid">
            <iframe class="video-shh" 
               ></iframe>
            
            <div class="video-title" src="https://www.youtube.com/embed/_MUbFDtkyzI?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>12 Link in HTML</div>
        </div>
        <div class="vid">
            <iframe class="video-shh" 
               ></iframe>
            
            <div class="video-title" src="https://www.youtube.com/embed/wHFpN-GfOXI?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>13 Block and inline Element in HTML</div>
        </div>
        <div class="vid">
            <iframe class="video-shh"
               ></iframe>
            
            <div class="video-title"  src="https://www.youtube.com/embed/94OM0O_JO5k?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>14 Class in HTML</div>
        </div>
        <div class="vid">

            <iframe class="video-shh"
               ></iframe>
            
            <div class="video-title"  src="https://www.youtube.com/embed/znK96QUn7Ys?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>15 iframe tag in HTML</div>
        </div>
        <div class="vid">
            <iframe class="video-shh" 
               ></iframe>
            
            <div class="video-title"  src="https://www.youtube.com/embed/Qnwy8D4RpPA?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>16 Fieldset tag in HTML</div>
        </div>

        <div class="vid">
            <iframe class="video-shh" 
               ></iframe>
            <div class="video-title" src="https://www.youtube.com/embed/uICxY1skva0?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>18 Javascript in HTML</div>
        </div>
        <div class="vid">
            <iframe class="video-shh" 
               ></iframe>
              
            <div class="video-title" src="https://www.youtube.com/embed/N9Vf-CmNXyo?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>19 Input in HTML</div>
        </div>

    </div>
    </div>
    </div>      
  )
}
