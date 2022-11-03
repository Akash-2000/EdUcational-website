import "./react_video.css"
import React from "react"
import Navbar from "../../../Navbar/navbar";
import { useState, useEffect, useRef } from "react";


export default function React_video() {
    const [ src , setsrc] = useState("https://www.youtube.com/embed/rHEJj_wkfD0?modestbranding=1&rel=0&enablejsap")
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
           <div class="vid active" >
                
               <iframe id="player" src={src}></iframe>
                   
            </div>
           
         </div>
    <div class="video-list">
                <div class="vid active">
                     <div class="video-title" src="https://www.youtube.com/embed/rHEJj_wkfD0?modestbranding=1&rel=0&enablejsap"  onClick={handleclick} >01 Introduction to React JS</div>
                </div>
        <div class="vid ">
              
              <div class="video-title" src="https://www.youtube.com/embed/A5tCsI7Tsq4?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>02 React JS Course for Beginners</div>
        </div>
        <div class="vid">
            
            <div class="video-title" src="https://www.youtube.com/embed/WU_Xq4wNH7c?modestbranding=1&rel=0&enablejsapi=1"  onClick={handleclick}>03 Why React ? </div>
        </div>
        <div class="vid">
        <iframe class="video-shh" ></iframe>
            
            <div class="video-title" src="https://www.youtube.com/embed/reni26BISac?modestbranding=1&enablejsapi=1" onClick={handleclick}>04 ReactDom and JSX</div>
        </div>
        <div class="vid">
            <iframe class="video-shh"
               ></iframe>
            
            <div class="video-title"  src="https://www.youtube.com/embed/eCi2xwa7yhE?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>05 ReactDom and JSX Practice </div>
        </div>
        <div class="vid"> 
            
                <iframe class="video-shh"
                   ></iframe>
                
            <div class="video-title"  src="https://www.youtube.com/embed/mEzRK4ztJfE?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>06 Functional Components in React JS</div>
        </div>
        <div class="vid">
                        <iframe class="video-shh"
                           ></iframe>
           
            <div class="video-title"  src="https://www.youtube.com/embed/DiEaDxfSo1k?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>07 Functional components Practice </div>
        </div>
        <div class="vid">

            <iframe class="video-shh"
               ></iframe>
                
            <div class="video-title"  src="https://www.youtube.com/embed/sROO46hrYlg?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>08 Move Components into Seperate Files </div>
        </div>
        <div class="vid">
            <iframe class="video-shh"
               ></iframe>
            
            <div class="video-title"  src="https://www.youtube.com/embed/zr6oNsH4wcQ?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>09Parent & child component in ReactJs</div>
        </div>
        <div class="vid">
            
            <div class="video-title" src="https://www.youtube.com/embed/VeWkHVNxupM
?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>10 Parent/child Component Practice</div>
        </div>
        <div class="vid">
            <iframe class="video-shh"
               ></iframe>
            
            <div class="video-title"   src="https://www.youtube.com/embed/xGzp0P5xmrc?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>11 Todo App Phase1 React Js</div>
        </div>
        <div class="vid">
            
            <div class="video-title" src="https://www.youtube.com/embed/ehnuSzQbpps?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>12 Styling React with CSS Classes</div>
        </div>
        <div class="vid">
            
            <div class="video-title" src="https://www.youtube.com/embed/zpNhmxiXVJE?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>13 Some Caveats </div>
        </div>
        <div class="vid">
            <iframe class="video-shh"
               ></iframe>
            
            <div class="video-title"  src="https://www.youtube.com/embed/_7Er4VnDK_E?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>14 JSX to JavaScript and Back </div>
        </div>
        <div class="vid">

            <iframe class="video-shh"
               ></iframe>
            
            <div class="video-title"  src="https://www.youtube.com/embed/2vGAjoR-ZNk?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>15 Inline Style with Style Property</div>
        </div>
        <div class="vid">
            
            <div class="video-title"  src="https://www.youtube.com/embed/9U3rDFDKRrA?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>16 To do App Phase2 React JS</div>
        </div>

        <div class="vid">
            <i  class="fa-solid fa-circle-play"></i>
            <div class="video-title" src="https://www.youtube.com/embed/FmsCkoiQlZs
?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>17 Props Part 1 React JS   
</div>
        </div>
        <div class="vid">
              
            <div class="video-title" src="https://www.youtube.com/embed/5vMwphAGuhA?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>18 Props Part 2 React JS</div>
        </div>
        <div class="vid">
              
            <div class="video-title" src="https://www.youtube.com/embed/z6vnKMp28mA?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>19 Props in React</div>
        </div>
        <div class="vid">
              
            <div class="video-title" src="https://www.youtube.com/embed/veZmE08Fjks?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>20 Props and Styling Practice </div>
        </div>
        <div class="vid">
              
            <div class="video-title" src="https://www.youtube.com/embed/sSmXKi-gcsE?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>21 Mapping Components in React   </div>
        </div>
        <div class="vid">
              
            <div class="video-title" src="https://www.youtube.com/embed/v5i8LB4gj14?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>22 Mapping components Practice React</div>
        </div>
        <div class="vid">
              
            <div class="video-title" src="https://www.youtube.com/embed/wpPIKifYQ34?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>23 
Todo App Phase 3 React</div>
        </div>
        <div class="vid">
              
            <div class="video-title" src="https://www.youtube.com/embed/nG1MXdnLV2w
?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>24 Class based Components React</div>
        </div>
        <div class="vid">
              
            <div class="video-title" src="https://www.youtube.com/embed/Rih2r9R197E?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>25 Class-Based Components Practice </div>
        </div>
        <div class="vid">
            <div class="video-title" src="https://www.youtube.com/embed/CxQkG2-qDeQ?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>26 State </div>
        </div>
        <div class="vid">
              
            <div class="video-title" src="https://www.youtube.com/embed/u3v-1H8V7cc?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>27 State Practice </div>
        </div>
        <div class="vid">
              
            <div class="video-title" src="https://www.youtube.com/embed/Z0gBnRXlapc?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>28 State Practice 2 </div>
        </div>
        <div class="vid">
              
            <div class="video-title" src="https://www.youtube.com/embed/ZHvzPo1GMCM?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>29 Todo App Phase 4</div>
        </div>
        <div class="vid">
              
            <div class="video-title" src="https://www.youtube.com/embed/azuQY0rfGII?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>30 Handling Events in React</div>
        </div>
        <div class="vid">
              
            <div class="video-title" src="https://www.youtube.com/embed/9-M0XkqyPMA?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>31 Todo App Phase 5 </div>
        </div>
        <div class="vid">
              
            <div class="video-title" src="https://www.youtube.com/embed/xNItMd1vXwA?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>32 Changing State</div>
        </div>
                <div class="vid">
              
            <div class="video-title" src="https://www.youtube.com/embed/UoANrIQvXmc
?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>33 Todo App Phase 6 </div>
        </div>
                <div class="vid">
              
            <div class="video-title" src="https://www.youtube.com/embed/xEExIVpWprA
?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>34 Life Cycle Methods part 1  </div>
        </div>
                <div class="vid">
              
            <div class="video-title" src="https://www.youtube.com/embed/auwCa-sbyHM?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>35 Life cycle Methods Part 2 </div>
        </div>
                <div class="vid">
              
            <div class="video-title" src="https://www.youtube.com/embed/imcuoy7Csuk?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>36 Conditional Rendering in React </div>
        </div>
                <div class="vid">
              
            <div class="video-title" src="https://www.youtube.com/embed/A6-Rgww9080?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>37 Conditional Rendering Part 2 </div>
        </div>
                <div class="vid">
              
            <div class="video-title" src="https://www.youtube.com/embed/dIY-PClS2KI?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>38 Conditional Rendering Practice </div>
        </div>
               
         <div class="vid">
              
            <div class="video-title" src="https://www.youtube.com/embed/Nyk_TCaS6Js?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>39 Todo App Phase 7 </div>
        </div>
         <div class="vid">
              
            <div class="video-title" src="https://www.youtube.com/embed/va-PhX1Kxc4?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>40 Fetching Data of an API React JS </div>
        </div>
         <div class="vid">
              
            <div class="video-title" src="https://www.youtube.com/embed/03OSYsXjByk?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>41 Forms Part 1 React</div>
        </div>
         <div class="vid">
              
            <div class="video-title" src="https://www.youtube.com/embed/xBWXUz_vfhI?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>42
Forms Part 2 React </div>
        </div>
         <div class="vid">
              
            <div class="video-title" src="https://www.youtube.com/embed/HAL6ivC7FH8?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>43 Forms Practice React </div>
        </div>
         <div class="vid">
              
            <div class="video-title" src="https://www.youtube.com/embed/6KjVbSYf2v4?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>44 UContainer/Component Architecture</div>
        </div>
                 <div class="vid">
              
            <div class="video-title" src="https://www.youtube.com/embed/6h4YtzSlM80?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>45 Meme Generator Capstone Project</div>
        </div>
                 <div class="vid">
              
            <div class="video-title" src="https://www.youtube.com/embed/vrHB7TJ_bMI?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>46 Writing Modern React Apps </div>
        </div>
                 <div class="vid">
              
            <div class="video-title" src="https://www.youtube.com/embed/KIWHTgdWjZo?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>47 Project Ideas for Practicing React</div>
        </div>
                 <div class="vid">
              
            <div class="video-title" src="https://www.youtube.com/embed/DC8EpPUG52E?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>48
Conclusion React </div>
        </div>
    </div>
    </div>
    </div>
      
  )
}
