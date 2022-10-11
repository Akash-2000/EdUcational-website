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
import { Box } from '@mui/material';
import Reactcard from "./component/course/reactjs/reactcard/reactcard";
import React_video from "./component/course/reactjs/page/react_video";
import Scriptcard from "./component/course/typescript/typescript-card/typescript-card";
import Ts_video from "./component/course/typescript/page/typescript_video";
import "./App.css"
import Navbar from "./component/Navbar/navbar";
import Compiler from "./nav-pages/compiler";
import Article from "./nav-pages/article"
import Search from "./nav-pages/search"
import Logout from "./nav-pages/logout"
import Login from "./component/login-logut/login";
import Register from "./component/login-logut/Register";
import Forgotpassword from "./component/login-logut/forgotpassword";
import { useContext } from "react";
import { Context } from "./context/context";
import Verifiyotp from "./component/login-logut/verifiyotp";
import LoginButt from "./component/login-logut/loginbut";
import LinkedInPage from "./component/login-logut/linkedin";
import VideoDetail from "./component/Youtube/components/VideoDetail"
import Course from "./nav-pages/course";
import Total_blog from "./component/blog/total_blog";
import { LinkedInCallback } from 'react-linkedin-login-oauth2';
import  { createContext, useReducer } from 'react';
import GitLogin from "./component/login-logut/github-login/gitLogin";
import ChannelDetail from "./component/Youtube/components/channelDetail"
import { initialState, reducer } from "./component/login-logut/github-login/store/reducer/indexof";
import Write from "./component/blog/write/write";
import Single from "./component/blog/Pages/single/single";
import SearchFeed from "./component/Youtube/components/Searchfeed"
import Youtube from "./component/Youtube/youtube";
import Landing from "./component/Complier/Landing";
export const AuthContext = createContext();

      export default function App() {
           const [state, dispatch] = useReducer(reducer, initialState);
           console.log(state)
   const {user} = useContext(Context)
   return (
         
      <BrowserRouter>
      <AuthContext.Provider
      value={{
        state,
        dispatch
      }}
    >
           <Routes>
              <Route exact path="/allcards" element={<Allcards/>}/>
         <Route exact path="/html-video" element={<Html_video/>}/>
         <Route exact path="/course-video" element={<Course/>}/>
         <Route exact path="/css-video" element={<Css_video/>}/>
         <Route exact path="/js-video" element={<Js_video/>}/>
         <Route exact path="/mongoDb-video" element={<Mongo_video/>}/>
         <Route exact path="/sql-video" element={<Mysql_video/>}/>
         <Route exact path="/node-video" element={<Node_video/>}/>
         <Route exact path="/react-video" element={<React_video/>}/>
         <Route exact path="/script-video" element={<Ts_video/>}/>
           <Route exact path="/" element={<Navbar/>}/> 
            <Route exact path="/course" element={<Course/>}/>
            <Route exact path="/article" element={<Article/>}/>
            <Route exact path="/search" element={<Search/>}/>
            <Route exact path="/login" element={<Login/>}/>
            <Route exact path="/register" element={<Register/>}/>
            <Route exact path="/fpassword" element={<Forgotpassword/>}/>
            <Route exact path="/verify" element={<Verifiyotp/>}/>
            <Route exact path="/logbuu" element={<LoginButt/>}/>
            <Route exact path="/linkedins" element={<LinkedInPage/>}/>
            <Route exact path="/linkedin" component={<LinkedInCallback/>} />
            <Route exact path="/totalblog" element={<Total_blog/>}/>
             <Route path="/write" element={<Write/>}></Route>
              <Route path="/post/:id" element={<Single/>}></Route>
              
              <Route path="/compiler" element={<Landing/>}></Route>
              <Route path="/youtube" element={<Youtube/>}></Route>
               <Route path='/video/:id' element={<VideoDetail />} />
                 <Route path='/channel/:id' element={<ChannelDetail />} />
                 <Route path='/search/:searchTerm' element={<SearchFeed />} />
        <Route path="/git" element={<GitLogin/>}/>
        
            </Routes>
            </AuthContext.Provider>
    
            </BrowserRouter>
         
   )
      }
 