import React from "react";
import Allcards from "./component/allcards";
import HtmlCard from "./component/course/html/card/card";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Html_video from "./component/course/html/page/Html_video"
import Css_video from "./component/course/css/page/css_video"
import Js_video from "./component/course/javascript/page/js_video" 
import Mongo_video from "./component/course/mongoDB/page/mongo_video";
import Sqlcard from "./component/course/MySQL/sqlcard/sqlcard";
import Mysql_video from "./component/course/MySQL/page/mysql_video";
import Nodecard from "./component/course/nodejs/nodecard/nodecard";
import Node_video from "./component/course/nodejs/page/node_video";
import Reactcard from "./component/course/reactjs/reactcard/reactcard";
import React_video from "./component/course/reactjs/page/react_video";
import Scriptcard from "./component/course/typescript/typescript-card/typescript-card";
import Ts_video from "./component/course/typescript/page/typescript_video";
import "./App.css"
import Navbar from "./component/Navbar/navbar";
import Course from "./nav-pages/course";
import Compiler from "./nav-pages/compiler";
import Article from "./nav-pages/article"
import Search from "./nav-pages/search"
import Logout from "./nav-pages/logout"

export default function App() {
   return (
    <div className="App">     

   {/*   <BrowserRouter>
      <Routes>
         <Route exact path="/" element={<Allcards/>}/>
         <Route exact path="/html-video" element={<Html_video/>}/>
         <Route exact path="/css-video" element={<Css_video/>}/>
         <Route exact path="/js-video" element={<Js_video/>}/>
         <Route exact path="/mongoDb-video" element={<Mongo_video/>}/>
         <Route exact path="/sql-video" element={<Mysql_video/>}/>
         <Route exact path="/node-video" element={<Node_video/>}/>
         <Route exact path="/react-video" element={<React_video/>}/>
         <Route exact path="/script-video" element={<Ts_video/>}/>
            
      </Routes>
      </BrowserRouter>  */}


         <>
           <BrowserRouter>
           <Routes>
            <Route exact path="/" element={<Navbar/>}/>
            <Route exact path="/course" element={<Course/>}/>
            <Route exact path="/compiler" element={<Compiler/>}/>
            <Route exact path="/article" element={<Article/>}/>
            <Route exact path="/search" element={<Search/>}/>
            <Route exact path="/logout" element={<Logout/>}/>

           </Routes>
            
           </BrowserRouter>
         </>















    </div>
   )

}