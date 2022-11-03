import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import Navbar from "../../Navbar/navbar";
import {logo} from "../utils/constant";
import SearchBar from "./SearchBar"
import { useNavigate } from "react-router-dom";

export default function NavbarYoutube(){
   let navigate = useNavigate()
     const Handlecompiler = ()=>{
   
    console.log("i clicked")
     navigate("/compiler")
  }
  const Handleblog = ()=>{
     navigate("/totalblog")
  }
   const handleCourse = ()=>{
    navigate("/allcards")
  }
  const handleDoubts = ()=>{
    navigate("/search_engine")
  }
    return (
  <>
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
    </Link>
    <nav class="navbar navbar-expand-lg red fontColor">
  <div class="container-fluid">
    <a class="navbar-brand text-light" href="#">  <img src="https://avatars.githubusercontent.com/u/91174414?v=4" width="50" height="50" class="d-inline-block  align-text-center rounded-circle  border-light" alt=""/>
     Revildo code</a>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
     <form>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
       
          <li class="nav-item ">
          <a class="nav-link nav-cor text-light"   onClick={handleCourse}>Course</a>
        </li>
        <li class="nav-item">
          <a class="nav-link nav-cor text-light"  onClick={handleDoubts}>Doubts?</a>
        </li>
           <li class="nav-item">
               <SearchBar />
        </li>
        <li class="nav-item">
          <a class="nav-link nav-cor text-light" onClick={Handlecompiler} >Compiler</a>
        </li>
        <li class="nav-item">
          <a class="nav-link nav-cor text-light"  onClick={Handleblog} >Blog</a>
        </li>
        
         <button class="btn btn-outline-success nav-cor text-light" type="submit">Login</button>
        
     </ul>
    </div>
    </form>
    </div>
</nav>
</>
);
    }

