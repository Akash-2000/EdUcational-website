import "./posts.css"
import Post from "../post/post"
import { Link, useLocation } from "react-router-dom"
export default function post({post}) {
  return (
    <>
    <div className="post">
       <Link 
      className="link btn btn-success mt-3 ms-2" to="/write">Write Your Own blog!</Link>
    </div>
   <div class="container d-flex justify-content-cente">
  <div class="row">
    
      {post.map((p)=>(
        <div className="col-12 col-lg-6">
        <Post post1={p}/>
        </div>
      ))}        
    </div>
  </div>
    </>
  )
}
