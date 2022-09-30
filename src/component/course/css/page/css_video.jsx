import "./css_video.css"
import React from "react"

import { useState, useEffect, useRef } from "react";


export default function Css_video() {
    const [ src , setsrc] = useState("https://www.youtube.com/embed/8x3IoluPuH8?modestbranding=1&rel=0&enablejsap")
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
                     <div class="video-title" src="https://www.youtube.com/embed/8x3IoluPuH8?modestbranding=1&rel=0&enablejsap"  onClick={handleclick} >01 Use Inline styles to change the color of Text in CSS </div>
                </div>
        <div class="vid ">
              
              <div class="video-title" src="https://www.youtube.com/embed/TQjeOe25FEU?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>0 2Use CSS Selectors to Style the Elements </div>
        </div>
        <div class="vid">
            
            <div class="video-title" src="https://www.youtube.com/embed/Wan0Qy9xvIo?modestbranding=1&rel=0&enablejsapi=1"  onClick={handleclick}>03 Use a CSS Class to Style an Element</div>
        </div>
        <div class="vid">
        <iframe class="video-shh" ></iframe>
            
            <div class="video-title" src="https://www.youtube.com/embed/VAxiUc9xFOE?modestbranding=1&enablejsapi=1" onClick={handleclick}>04 Multiple Elements with a CSS Class </div>
        </div>
        <div class="vid">
            <iframe class="video-shh"
               ></iframe>
            
            <div class="video-title"  src="https://www.youtube.com/embed/4PaABzBbf2o?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>05 Change the Font Size of an Element in CSS L</div>
        </div>
        <div class="vid"> 
            
                <iframe class="video-shh"
                   ></iframe>
                
            <div class="video-title"  src="https://www.youtube.com/embed/PfvQWCv6VrI?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>06 Set the Font Family of an Element in CSS</div>
        </div>
        <div class="vid">
                        <iframe class="video-shh"
                           ></iframe>
           
            <div class="video-title"  src="https://www.youtube.com/embed/1GBV7rWVErU?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>07 Import a Google Font in CSS </div>
        </div>
        <div class="vid">

            <iframe class="video-shh"
               ></iframe>
                
            <div class="video-title"  src="https://www.youtube.com/embed/1hI3HB4XdWQ?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>08 Specify how fonts should Degrade</div>
        </div>
        <div class="vid">
            <iframe class="video-shh"
               ></iframe>
            
            <div class="video-title"  src="https://www.youtube.com/embed/38G5bj6fypM?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>09 Your Image in CSS</div>
        </div>
        <div class="vid">
            
            <div class="video-title" src="https://www.youtube.com/embed/kMdk3-FUGgg?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>10 Add Borders Around Your Elements in CSS</div>
        </div>
        <div class="vid">
            <iframe class="video-shh"
               ></iframe>
            
            <div class="video-title"   src="https://www.youtube.com/embed/bpTuRZ9ofNE?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>11 Add Rounded Corners with Border - radius in CSS </div>
        </div>
        <div class="vid">
            
            <div class="video-title" src="https://www.youtube.com/embed/qo0G_7gdsGg?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>12 Give a Background Element to a div element in CSS</div>
        </div>
        <div class="vid">
            
            <div class="video-title" src="https://www.youtube.com/embed/pgj6k8hyA40?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>13 Use an id attribute to style an Element in CSS </div>
        </div>
        <div class="vid">
            <iframe class="video-shh"
               ></iframe>
            
            <div class="video-title"  src="https://www.youtube.com/embed/CtZeFyw6g2o?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>14 Adjust the Padding of an Element in CSS </div>
        </div>
        <div class="vid">

            <iframe class="video-shh"
               ></iframe>
            
            <div class="video-title"  src="https://www.youtube.com/embed/j_sA-gTgbpI?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>15 Use Clockwise Notation to Specify the Padding of an Element </div>
        </div>
        <div class="vid">
            
            <div class="video-title"  src="https://www.youtube.com/embed/w4REnEvRLIc?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>16 Use Attribute Selectors to Style Elements in CSS </div>
        </div>

        <div class="vid">
            <i  class="fa-solid fa-circle-play"></i>
            <div class="video-title" src="https://www.youtube.com/embed/i3Jlx9h4YDw?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>17 Understand Absolute versus Relative Units in CSS </div>
        </div>
        <div class="vid">
              
            <div class="video-title" src="https://www.youtube.com/embed/xrsIYdEqJrs?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>18 Inherit styles from the Body Element in CSS</div>
        </div>
        <div class="vid">
              
            <div class="video-title" src="https://www.youtube.com/embed/Ne6qJiX-NkY?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>19 Prioritize one style over Another in CSS </div>
        </div>
        <div class="vid">
              
            <div class="video-title" src="https://www.youtube.com/embed/no3PdJgmpqM?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>20 Override Styles in Subsequent CSS </div>
        </div>
        <div class="vid">
              
            <div class="video-title" src="https://www.youtube.com/embed/qEXG3n4_Xww?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>21 Use Hex Code for Specific Colors </div>
        </div>
        <div class="vid">
              
            <div class="video-title" src="https://www.youtube.com/embed/fZHTIooJlTU?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>22 Use RGB values to Color Elements</div>
        </div>
        <div class="vid">
              
            <div class="video-title" src="https://www.youtube.com/embed/qCQ3nFgiA6w?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>23 
Use CSS variables to change several elements at once </div>
        </div>
        <div class="vid">
              
            <div class="video-title" src="https://www.youtube.com/embed/Yr1Z8gtuRpY?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>24 Create a Custom CSS variable </div>
        </div>
        <div class="vid">
              
            <div class="video-title" src="https://www.youtube.com/embed/BcUZevdIA4k?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>25 Attach a Fallback value to a CSS variable </div>
        </div>
        <div class="vid">
              
            <div class="video-title" src="https://www.youtube.com/embed/53XJ00CxaBs?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>26 Cascading CSS variables</div>
        </div>
        <div class="vid">
              
            <div class="video-title" src="https://www.youtube.com/embed/A8BZpb16R7A?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>27 Create your first CSS Grid</div>
        </div>
        <div class="vid">
              
            <div class="video-title" src="https://www.youtube.com/embed/FBnK8M1laUI?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>28 Align an Item Horizontally using justify - self</div>
        </div>
        <div class="vid">
              
            <div class="video-title" src="https://www.youtube.com/embed/ImC0B4doMzg?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>29 Divide the Grid into an area template </div>
        </div>
        <div class="vid">
              
            <div class="video-title" src="https://www.youtube.com/embed/pWLW1beuhH0?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>29 Reduce repetition using the repeat function in CSS </div>
        </div>
        <div class="vid">
              
            <div class="video-title" src="https://www.youtube.com/embed/-HcGLtKqJWg?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>30 Limit item size using the minmax Function </div>
        </div>
        <div class="vid">
              
            <div class="video-title" src="https://www.youtube.com/embed/UeH68OOGyJ8?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>31 Create Flexible Layouts using auto-fill</div>
        </div>
                <div class="vid">
              
            <div class="video-title" src="https://www.youtube.com/embed/6QinCYWOWYM?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>32 Use media queries to create responsive Layouts</div>
        </div>
                <div class="vid">
              
            <div class="video-title" src="https://www.youtube.com/embed/u2kpJGMUPLg?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>33 Create Grids within Grid in CSS </div>
        </div>
                <div class="vid">
              
            <div class="video-title" src="https://www.youtube.com/embed/oPZ3HdUVOXA?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>34 Use display: flex to Position two boxes </div>
        </div>
                <div class="vid">
              
            <div class="video-title" src="https://www.youtube.com/embed/xENpfOsAZfc?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>35 Align element using the justify - content property </div>
        </div>
                <div class="vid">
              
            <div class="video-title" src="https://www.youtube.com/embed/CCHGewiDfjU?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>36 Align element using the align - Items property</div>
        </div>
                <div class="vid">
              
            <div class="video-title" src="https://www.youtube.com/embed/IUrWD1tUE_Y?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>37 Use the flex-wrap property to wrap a Row Or Column </div>
        </div>
                <div class="vid">
              
            <div class="video-title" src="https://www.youtube.com/embed/APMBPyNh1m4?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>38 Use the order property to Rearrange Items </div>
        </div>
    </div>
    </div>
      
  )
}
