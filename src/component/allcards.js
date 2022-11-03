import React,{Component} from 'react';  
import '../component/Youtube/allcards.css'
import CssCard from './course/css/csscard/css-card'
import HtmlCard from './course/html/card/card'
import Jscard from './course/javascript/jscard/jscard';
import Mongocard from './course/mongoDB/mongoDbcard/mogocard';
import Sqlcard from './course/MySQL/sqlcard/sqlcard';
import Nodecard from './course/nodejs/nodecard/nodecard';
import Reactcard from './course/reactjs/reactcard/reactcard';
import Scriptcard from './course/typescript/typescript-card/typescript-card';
import "./allcards.css"
import Navbar from './Navbar/navbar';
export class Allcards extends Component { 
    render()
    {
        
  return (
  /*   <>        <Navbar/>
       <OwlCarousel items={3}  
          className="owl-theme"  
          loop 
          nav  
          margin={2} >       
       <div> <HtmlCard/></div>
      <div><CssCard/></div>
      <div><Jscard/></div>
      <div><Mongocard/></div>
      <div><Sqlcard/></div>
      <div><Nodecard/></div>
      <div><Reactcard/></div>
      <div><Scriptcard/></div>
      </OwlCarousel>
  </> */

  <>
    <Navbar/>
    <div class="container-fluid bodyof">
      <div className="row gy-4  justify-content-center">
      <div className='col-xs-6 col-md-3 col-md-offset-2 ms-10'><HtmlCard/></div>
      <div className='col-xs-6 col-md-3'><CssCard/></div>
       <div className='col-xs-6 col-md-3'><Jscard/></div>
      <div className='col-sm-6 col-md-3'><Mongocard/></div>
      <div className='col-sm-6 col-md-3'><Sqlcard/></div>
      <div className='col-sm-6 col-md-3'><Nodecard/></div>
       <div className='col-sm-6 col-md-3'><Reactcard/></div>
      <div className='col-sm-6 col-md-3'><Scriptcard/></div>
      </div>
     
    </div> 
  </>

  )
    }
}
export default Allcards
