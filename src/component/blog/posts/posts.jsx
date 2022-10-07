import "./posts.css"
import Post from "../post/post"
import { Link, useLocation } from "react-router-dom"
export default function post({post}) {
  return (
    <div className='post'>
       <li className="toplist-item"> <Link 
      className="link" to="/write">WRITE</Link></li>
      {post.map((p)=>(
        <Post post1={p}/>
      ))}        
    </div>
  )
}
