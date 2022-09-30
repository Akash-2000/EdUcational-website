import "./mysql.css"
import React from "react"

import { useState, useEffect, useRef } from "react";


export default function Mysql_video() {
    const [ src , setsrc] = useState("https://www.youtube.com/embed/PXw5m7Fki5U?modestbranding=1&rel=0&enablejsap")
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
                     <div class="video-title" src="https://www.youtube.com/embed/PXw5m7Fki5U?modestbranding=1&rel=0&enablejsap"  onClick={handleclick} >01 Introduction to MySQL </div>
                </div>
        <div class="vid ">
              
              <div class="video-title" src="https://www.youtube.com/embed/40-W9s-RYIw?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>02 MySQL Installation and setup   </div>
        </div>
        <div class="vid">
            
            <div class="video-title" src="https://www.youtube.com/embed/THVTk9bfXTU?modestbranding=1&rel=0&enablejsapi=1"  onClick={handleclick}>03 Creating the Database MySQL</div>
        </div>
        <div class="vid">
        <iframe class="video-shh" ></iframe>
            
            <div class="video-title" src="https://www.youtube.com/embed/RWe1k3rt9Ug?modestbranding=1&enablejsapi=1" onClick={handleclick}>04 Select Statement MySQL</div>
        </div>
        <div class="vid">
          
            <div class="video-title"  src="https://www.youtube.com/embed/CA3ayXWq8hU?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>05 Select Clause MySQL</div>
        </div>
        <div class="vid"> 
            
                <iframe class="video-shh"
                   ></iframe>
                
            <div class="video-title"  src="https://www.youtube.com/embed/EqhHZuvLYVc?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>06 Where clause MySQL</div>
        </div>
        <div class="vid">
                       
           
            <div class="video-title"  src="https://www.youtube.com/embed/3X41Ux6nHeM?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>07 AND OR NOT operator MySQL</div>
        </div>
        <div class="vid">
                 <iframe class="video-shh"
                           ></iframe>
            <div class="video-title"  src="https://www.youtube.com/embed/B3_H-PSWGlk?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>08  Between Operator MySQL</div>
        </div>
        <div class="vid">
         
               <iframe class="video-shh"
                           ></iframe>
            <div class="video-title"  src="https://www.youtube.com/embed/qt_0wA8xdr8?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>09  IN operator MySQL</div>
        </div>
        <div class="vid">
            
            <div class="video-title" src="https://www.youtube.com/embed/EKRfYbtZSOg?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>10 Like operator MySQL</div>
        </div>
        <div class="vid">
         
            
            <div class="video-title"   src="https://www.youtube.com/embed/2XHC8yotapc?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>11 REGEXP operator MySQL </div>
        </div>
        <div class="vid">
            
            <div class="video-title" src="https://www.youtube.com/embed/qSPfKVnvrt4?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>12 IS Null operator MySQL</div>
        </div>
        <div class="vid">
            
            <div class="video-title" src="https://www.youtube.com/embed/pHlX_lHYPHg?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>13 Order By Clause MySQL</div>
        </div>
        <div class="vid">
         
            <div class="video-title"  src="https://www.youtube.com/embed/baUsnaL7_uY?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>14 Limit Clause MySQL </div>
        </div>
        <div class="vid">

       
            
            <div class="video-title"  src="https://www.youtube.com/embed/RmkAeJ9t75w?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>15 Inner Join</div>
        </div>
        <div class="vid">
            
            <div class="video-title"  src="https://www.youtube.com/embed/mkR_PmhEC_M
?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>16 Joining Across Database MySQL  </div>
        </div>

        <div class="vid">
            <i  class="fa-solid fa-circle-play"></i>
            <div class="video-title" src="https://www.youtube.com/embed/MUBFjJEiZZ0?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>17 Self Join MySQL </div>
        </div>
        <div class="vid">
              
            <div class="video-title" src="https://www.youtube.com/embed/WEgEW8mx8gQ?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>18 Joining Multiple Tables </div>
        </div>
        <div class="vid">
              
            <div class="video-title" src="https://www.youtube.com/embed/JUPyShXOjlA?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>19 Compound Join Condition MySQL</div>
        </div>
        <div class="vid">
              
            <div class="video-title" src="https://www.youtube.com/embed/_sA6lZBk2zg?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>20 Implicit Join Syntax MySQ</div>
        </div>
        <div class="vid">
              
            <div class="video-title" src="https://www.youtube.com/embed/vEXGfuNqtCs?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>21 Outer Join MySQL </div>
        </div>
        <div class="vid">
              
            <div class="video-title" src="https://www.youtube.com/embed/dp9QOMiV6gM?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>22 Outer Join between multiple tables</div>
        </div>
        <div class="vid">
              
            <div class="video-title" src="https://www.youtube.com/embed/QuMG1XJhp8s?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>23 
Self Outer Join MySQL   </div>
        </div>
        <div class="vid">
              
            <div class="video-title" src="https://www.youtube.com/embed/RqOR8_YlqfU?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>24 Using Clause MySQL   </div>
        </div>
        <div class="vid">
              
            <div class="video-title" src="https://www.youtube.com/embed/vJ0enZcbSP0?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>25 Natural Joins MySQL </div>
        </div>
        <div class="vid">
              
            <div class="video-title" src="https://www.youtube.com/embed/pJPIhe5WMtQ?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>26 Cross Joins MySQL  </div>
        </div>
        <div class="vid">
              
            <div class="video-title" src="https://www.youtube.com/embed/zl1Q50a-KcA?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>27 Unions MySQL </div>
        </div>
        <div class="vid">
              
            <div class="video-title" src="https://www.youtube.com/embed/IemB2DISkSc?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>28 Column Attributes MySQL </div>
        </div>
        <div class="vid">
              
            <div class="video-title" src="https://www.youtube.com/embed/eCJZrDwWBFU?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>29 Inserting a Single Row MySQL </div>
        </div>
        <div class="vid">
              
            <div class="video-title" src="https://www.youtube.com/embed/AFaEG3BXsac?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>30 Inserting multiple rows MySQL</div>
        </div>
        <div class="vid">
              
            <div class="video-title" src="https://www.youtube.com/embed/BgkC9xHVltU?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>31 Inserting Hierarchical rows  </div>
        </div>
        <div class="vid">
              
            <div class="video-title" src="https://www.youtube.com/embed/rIFTirjBmS8?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>32 Creating a copy of a table</div>
        </div>
                <div class="vid">
              
            <div class="video-title" src="https://www.youtube.com/embed/u8T90uyuQVc?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>33 Updating a single row MySQL</div>
        </div>
                <div class="vid">
              
            <div class="video-title" src="https://www.youtube.com/embed/9j9b7OZQB7g?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>34 Updating Multiple rows MySQL </div>
        </div>
                <div class="vid">
              
            <div class="video-title" src="https://www.youtube.com/embed/1mDbJwFJyrg?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>35 Using Subqueries in updates </div>
        </div>
                <div class="vid">
              
            <div class="video-title" src="https://www.youtube.com/embed/Jd13BlGofGo?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>36 Deleting rows MySQL  </div>
        </div>
                <div class="vid">
              
            <div class="video-title" src="https://www.youtube.com/embed/PPR6eoOFleM?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>37 Restoring the Database </div>
        </div>
    </div>
    </div>
      
  )
}
