import "./home.css"
import Posts from "../../posts/posts"
import Header from "../../Header/Header"
import { useState } from "react"
import axios from "axios"
import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { LocalConvenienceStoreOutlined } from "@material-ui/icons"


export default function Home() {
  const [posts1,setposts1]=useState([])
  const {search} = useLocation()
  console.log(search)
  useEffect(()=>{
    const fetchposts = async() =>{
      const res = await axios.get(`http://localhost:5000/api/post${search}`)
      setposts1(res.data)
    }
    fetchposts()  
  },[search])
  console.log(posts1)
  const parameter=posts1
      return (
  <>
    <Header/>
    <div className="home">
    
        <Posts post={parameter}/>
 
        
    </div>
  </>
  )
}

