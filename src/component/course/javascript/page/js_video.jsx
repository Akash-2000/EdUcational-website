import "./js_video.css"
import React from "react"
import Navbar from "../../../Navbar/navbar";
import { useState, useEffect, useRef } from "react";


export default function Js_video() {
    const [ src , setsrc] = useState("https://www.youtube.com/embed/8kWa-UurIS4?modestbranding=1&rel=0&enablejsap")
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
                     <div class="video-title" src="https://www.youtube.com/embed/8kWa-UurIS4?modestbranding=1&rel=0&enablejsap"  onClick={handleclick} >01 Javascript Introduction#javascript_tutorial javascript for </div>
                </div>
        <div class="vid ">
              
              <div class="video-title" src="https://www.youtube.com/embed/V4rKC3toq1Y?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>02 JavaScript Comment</div>
        </div>
        <div class="vid">
            
            <div class="video-title" src="https://www.youtube.com/embed/WBHvIEFyYhE?modestbranding=1&rel=0&enablejsapi=1"  onClick={handleclick}>03 Datatypes and variables in javascript</div>
        </div>
        <div class="vid">
        <iframe class="video-shh" ></iframe>
            
            <div class="video-title" src="https://www.youtube.com/embed/1pjNJqIXDp4?modestbranding=1&enablejsapi=1" onClick={handleclick}>04  Storing values with assignment operator in javascript</div>
        </div>
        <div class="vid">
            <iframe class="video-shh"
               ></iframe>
            
            <div class="video-title"  src="https://www.youtube.com/embed/HepCl7RrrQE?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>05 Initializing variables with assignment operator in Javascript</div>
        </div>
        <div class="vid"> 
            
                <iframe class="video-shh"
                   ></iframe>
                
            <div class="video-title"  src="https://www.youtube.com/embed/ikdQ9mo3E5I?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>06 Arithmetic operators in javascript</div>
        </div>
        <div class="vid">
                        <iframe class="video-shh"
                           ></iframe>
           
            <div class="video-title"  src="https://www.youtube.com/embed/vWFzNx3S7YE?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>07 Decimal in javascript </div>
        </div>
        <div class="vid">

            <iframe class="video-shh"
               ></iframe>
                
            <div class="video-title"  src="https://www.youtube.com/embed/q_eb20qVCgk?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>08 Reminder in javascript </div>
        </div>
        <div class="vid">
            <iframe class="video-shh"
               ></iframe>
            
            <div class="video-title"  src="https://www.youtube.com/embed/Qr0O5kdsmy0?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>09 Compound assignment with Augmented addition </div>
        </div>
        <div class="vid">
            
            <div class="video-title" src="https://www.youtube.com/embed/dOSyr64RBO8?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>10 String variables in javascript </div>
        </div>
        <div class="vid">
            <iframe class="video-shh"
               ></iframe>
            
            <div class="video-title"   src="https://www.youtube.com/embed/LDGn831zj_k?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>11 Concatenating strings with plus operator in javascript</div>
        </div>
        <div class="vid">
            
            <div class="video-title" src="https://www.youtube.com/embed/uNp-xYR_NrM?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>12 Constructing strings with variables javascript</div>
        </div>
        <div class="vid">
            
            <div class="video-title" src="https://www.youtube.com/embed/CWhqa-lG5yc?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>13 Length of String in javascript </div>
        </div>
        <div class="vid">
            <iframe class="video-shh"
               ></iframe>
            
            <div class="video-title"  src="https://www.youtube.com/embed/nQRjdWFEWCI?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>14 Bracket notation to find first, last and nothing character in string</div>
        </div>
        <div class="vid">

            <iframe class="video-shh"
               ></iframe>
            
            <div class="video-title"  src="https://www.youtube.com/embed/-CO-k50co8o?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>15 Word blanks in javascript </div>
        </div>
        <div class="vid">
            
            <div class="video-title"  src="https://www.youtube.com/embed/LJrQlPMQVSA?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>16 Access Array data with indexes in javascript</div>
        </div>

        <div class="vid">
            <i  class="fa-solid fa-circle-play"></i>
            <div class="video-title" src="https://www.youtube.com/embed/jVc-pldwPqU?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>17 Manipulate Arrays with push(),pop(),shift() and unshift() in javascript
</div>
        </div>
        <div class="vid">
              
            <div class="video-title" src="https://www.youtube.com/embed/FZDgbF99uDw?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>18 Shopping List in javascript</div>
        </div>
        <div class="vid">
              
            <div class="video-title" src="https://www.youtube.com/embed/w2KVXRCVMVQ?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>19 Write Reusable Code with Function in javascript</div>
        </div>
        <div class="vid">
              
            <div class="video-title" src="https://www.youtube.com/embed/noXQeut4mGc?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>20 Global scope and function, Local scope and function in javascript</div>
        </div>
        <div class="vid">
              
            <div class="video-title" src="https://www.youtube.com/embed/CxEG6R6tL3M?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>21 Global vs Local scope and function in javascript|</div>
        </div>
        <div class="vid">
              
            <div class="video-title" src="https://www.youtube.com/embed/vgAOABjGisc?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>22 Return a value from a Function with Return in javascript</div>
        </div>
        <div class="vid">
              
            <div class="video-title" src="https://www.youtube.com/embed/dsbQFdZVYbY?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>23 
Stand in line in javascript </div>
        </div>
        <div class="vid">
              
            <div class="video-title" src="https://www.youtube.com/embed/V_RM_LpfqhM?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>24 link:Boolean values in javascript  </div>
        </div>
        <div class="vid">
              
            <div class="video-title" src="https://www.youtube.com/embed/IGMv3C12bsk?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>25 Use conditional logic with If statement in javascript</div>
        </div>
        <div class="vid">
              
            <div class="video-title" src="https://www.youtube.com/embed/0UdO9_TMnf8?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>26 Comparison with the equality Operator in javascript</div>
        </div>
        <div class="vid">
              
            <div class="video-title" src="https://www.youtube.com/embed/rlZxB2Bap6w?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>27 Comparison with the logical And operator in JavaScript</div>
        </div>
        <div class="vid">
              
            <div class="video-title" src="https://www.youtube.com/embed/ZHtVnD9s4GU?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>28 Else statement else if statement in JavaScript</div>
        </div>
        <div class="vid">
              
            <div class="video-title" src="https://www.youtube.com/embed/f3ukcEOS6SY?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>29 Golf Code in javascript </div>
        </div>
        <div class="vid">
              
            <div class="video-title" src="https://www.youtube.com/embed/EjsE_QKP51M?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>30 Switch statements in javascript</div>
        </div>
        <div class="vid">
              
            <div class="video-title" src="https://www.youtube.com/embed/PlcMfG_zT6A?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>31 Returning Boolean values from function in javascript </div>
        </div>
        <div class="vid">
              
            <div class="video-title" src="https://www.youtube.com/embed/gmd24gVRTN0?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>32 Counting Cards in javascript </div>
        </div>
                <div class="vid">
              
            <div class="video-title" src="https://www.youtube.com/embed/EbT9guxSZRw?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>33 Build Javascript Objects</div>
        </div>
                <div class="vid">
              
            <div class="video-title" src="https://www.youtube.com/embed/6oelYKPRA-4
?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>34 Accessing Object Properties with Dot Notation in javascript</div>
        </div>
                <div class="vid">
              
            <div class="video-title" src="https://www.youtube.com/embed/HUlYa_dVZig?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>35Add, Update and Delete Object Property in JavaScript</div>
        </div>
                <div class="vid">
              
            <div class="video-title" src="https://www.youtube.com/embed/PgRPSiXz5c4?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>36 Testing objects for properties in javascript  </div>
        </div>
                <div class="vid">
              
            <div class="video-title" src="https://www.youtube.com/embed/HcAcwMwdBrQ?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>37 Accessing Nested Arrays in javascript </div>
        </div>
                <div class="vid">
              
            <div class="video-title" src="https://www.youtube.com/embed/faj5PJhz1rA?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>38 Record Collections in javascript </div>
        </div>
               
         <div class="vid">
              
            <div class="video-title" src="https://www.youtube.com/embed/tgD-8LWfVgg?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>39 Iterate with For Loops Iterate Odd number with For loops in javascrip </div>
        </div>
         <div class="vid">
              
            <div class="video-title" src="https://www.youtube.com/embed/AGz3fsqeSyU?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>40 Nesting For Loops in Javascript </div>
        </div>
         <div class="vid">
              
            <div class="video-title" src="https://www.youtube.com/embed/J19-K9v4jrw?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>41 Iterate with Do while Loop in javascript</div>
        </div>
         <div class="vid">
              
            <div class="video-title" src="https://www.youtube.com/embed/m6N4VsTJb6Q?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>42
Profile Lookup in javascript </div>
        </div>
         <div class="vid">
              
            <div class="video-title" src="https://www.youtube.com/embed/Kh188Vrtd-o?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>43 Generate Random fraction Generate Random whole number in JavaScript</div>
        </div>
         <div class="vid">
              
            <div class="video-title" src="https://www.youtube.com/embed/vOC-k6jaNK0?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>44 Use the ParseInt Function in javascript </div>
        </div>
                 <div class="vid">
              
            <div class="video-title" src="https://www.youtube.com/embed/L1DzTmlsY0w?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>45 Use the conditional (ternary) operator </div>
        </div>
                 <div class="vid">
              
            <div class="video-title" src="https://www.youtube.com/embed/TaXSiQHnoLo?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>46 Difference between the var and let keyword in javascript</div>
        </div>
                 <div class="vid">
              
            <div class="video-title" src="https://www.youtube.com/embed/w7wKyaP9naA?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>47 Declare a Read-only variable with the const keyword in javascript</div>
        </div>
                 <div class="vid">
              
            <div class="video-title" src="https://www.youtube.com/embed/tgD-8LWfVgg?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>48
Prevent Object Mutation in javascript </div>
        </div>
                 <div class="vid">
              
            <div class="video-title" src="https://www.youtube.com/embed/t5CjeKjLAYM?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>49
Use Arrow Functios to write Concise Anonymous function in javascript</div>
        </div>
                 <div class="vid">
              
            <div class="video-title" src="https://www.youtube.com/embed/7N3s58qdHrA?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>50
Use the Rest operator with the Function Parameters in javascript</div>
        </div>
                 <div class="vid">
              
            <div class="video-title" src="https://www.youtube.com/embed/93XOzisACF0?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>51 Use Destructuring assignment to assign variable from Object in javascript</div>
        </div>
                 <div class="vid">
              
            <div class="video-title" src="https://www.youtube.com/embed/eLX5l0yIxZ4?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>52
Create Strings using Template Literals in javascript</div>
        </div>
                 <div class="vid">
              
            <div class="video-title" src="https://www.youtube.com/embed/USFcip1TZA8?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>53
Concise Object Literal declarations using simple fields in javascript</div>
        </div>
                 <div class="vid">
              
            <div class="video-title" src="https://www.youtube.com/embed/MLduUe7ItcM?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>54 Use class syntax to define a constructor function in javascript </div>
        </div>
                 <div class="vid">
              
            <div class="video-title" src="https://www.youtube.com/embed/EZ5xMykLvdo?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>55
Use getters and setters to control access to an Object in javascript</div>
        </div>
                 <div class="vid">
              
            <div class="video-title" src="https://www.youtube.com/embed/xkIyBTUd_CY?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>56 Understanding the difference between import and require in javascript</div>
        </div>
               
                 <div class="vid">
              
            <div class="video-title" src="https://www.youtube.com/embed/je7f_s_Lg_o?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>57
Use Export to Reuse a code block in javascript  </div>
        </div>
                 <div class="vid">
              
            <div class="video-title" src="https://www.youtube.com/embed/llynzeVrl9s?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>58
Use to import everything from a file in javascript </div>
        </div>
                 <div class="vid">
              
            <div class="video-title" src="https://www.youtube.com/embed/UE3qKDjAoOM?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>59 Create an export fallback with export default in javascript</div>
        </div>
         <div class="vid">
              
            <div class="video-title" src="https://www.youtube.com/embed/F6Nic_9aO1U?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>60
Using Objects for Lookups in javascript </div>
        </div>
         <div class="vid">
              
            <div class="video-title" src="https://www.youtube.com/embed/bdOWCuABdAA?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>61
Store Multiple values with Array in javascript</div>
        </div>
         <div class="vid">
              
            <div class="video-title" src="https://www.youtube.com/embed/tJsL9PV_urk?modestbranding=1&rel=0&enablejsapi=1" onClick={handleclick}>62
Async, await, Call back and promises in javascript</div>
        </div>

    </div>
    </div>
     </div> 
  )
}
