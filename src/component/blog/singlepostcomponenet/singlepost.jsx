import "./singlepost.css"
import { useLocation } from "react-router"
import { useEffect } from "react";
import axios from "axios"
import { useState } from "react";
import {Link} from "react-router-dom";
import Navbar from "../../Navbar/navbar";
import { useContext } from "react"
import { Context } from "../../../context/context"


export default function Singlepost() {
    const location = useLocation()
    const path = location.pathname.split("/")[2];
    const [post,setpost]=useState({})
    const  PF = "http://localhost:5000/images/"
     const {user} = useContext(Context)
    const[title,settitle]=useState("")
    const[desc,setdesc]=useState("")
    const [updatedMode,setupdatedMode]=useState(false)

    useEffect(()=>{
        const getpost = async()=>{
            const res = await axios.get(`http://localhost:5000/api/post/${path}`)
            setpost(res.data)
            settitle(res.data.title)
            setdesc(res.data.desc)
        }
        getpost()
    },[path])
    console.log(post)
    const handleDelete = async()=>{
        try {
                await axios.delete(`http://localhost:5000/api/post/${path}`,{data:{email:user}})
                window.location.replace(`/totalblog`)    
        } catch (error) {
            
        }
        
    }
    const handleupdate = async()=>{
       try {
                await axios.put(`http://localhost:5000/api/post/${path}`,{email:user,title,desc})
                //window.location.reload()
                setupdatedMode(false)    
        } catch (error) {
            
        }
       
    }
    return (
    <>

    <div className='singlepost'>
            <Navbar/>
        <div className="singlepostwrapper">
            {post.photo && (
            <div className="singleposting">
                <img className="singlepostimg" src={PF+post.photo}/>
            </div>
            )}
            {updatedMode ? (<input type="text" value={title} onChange={(e)=>settitle(e.target.value)}className="singleposttitle" autoFocus />):
            (
                <h1 className="singleposttitle">
                    {title} 
                    {console.log("email:"+post.email)}
                     {console.log("user:"+user)}
                     { console.log(post.email==user)}
            {(post.email === user||user ==="ajithrevildo1999@gmail.com")&&(
            <div className="singleposteditcomtainer">
                <i className="singleposticon fa-solid fa-pen-to-square" onClick={()=>setupdatedMode(true)}></i>
                <i className="singleposticon fa-solid fa-trash" onClick={handleDelete}></i>
            </div>
            )}
            </h1>)}
            <div className="singlepostino">
                <div className="singlepost">Author: 
                    <Link to={`/?username=${post.email}`}className="link"><b>{post.email}</b></Link>
                    </div>
                 <div className="singlepostdate">Date: <b>{new Date(post.createdAt).toDateString()}</b></div>
            </div>
            {updatedMode ? (
                <textarea className="singlepostInput" value={desc} onChange={(e)=>setdesc(e.target.value)}/>    
            ):(
                    <p className="singlepostdescription">{desc}
            </p>
            )}
            {updatedMode &&(
                <button className="singlepostbutton"onClick={handleupdate}>update</button>
            )}
                
            
        </div>
        </div>
        </>
  )
}
