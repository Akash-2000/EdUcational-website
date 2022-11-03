import './post.css'
import {Link} from "react-router-dom"
//{PF+post1.post1.photo}
export default function post(post1) {
  const  PF = "http://localhost:5000/images/"
  {console.log(PF+post1.post1.photo)}
  return (

  <div class="allign-items-center mt-5">
     <div class="card">
  <img class="card-img-top img-fluid"  src={PF+post1.post1.photo} alt="Card image cap"/>
  <div class="card-body card text-center" >
     <Link to={`/post/${post1.post1._id}`} className="link">
    <h5 class="card-title">{post1.post1.title}</h5>
    </Link>
    
    <p class="card-text text-truncate d-block textSstyle">{post1.post1.desc}</p>    
    <p class="card-text"><small class="text-muted">
      
      {Date(post1.post1.createdAt) }</small></p>
  </div>
     </div>
 </div>
  )
        }

