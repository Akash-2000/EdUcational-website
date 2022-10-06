import React,{Component} from 'react';  
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  
import CssCard from './course/css/csscard/css-card'
import HtmlCard from './course/html/card/card'
import Jscard from './course/javascript/jscard/jscard';
import Mongocard from './course/mongoDB/mongoDbcard/mogocard';
import Sqlcard from './course/MySQL/sqlcard/sqlcard';
import Nodecard from './course/nodejs/nodecard/nodecard';
import Reactcard from './course/reactjs/reactcard/reactcard';
import Scriptcard from './course/typescript/typescript-card/typescript-card';
import Navbar from './Navbar/navbar';
export class Allcards extends Component { 
    render()
    {
        
  return (
    <>        <Navbar/>
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
  </>

  )
    }
}
export default Allcards
