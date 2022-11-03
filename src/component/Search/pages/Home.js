import { Avatar } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import AppsIcon from "@material-ui/icons/Apps";
import "./Home.css";
import Search from "../componenets/Search";
import Navbar from "../../Navbar/navbar";

function Home() {
  return (
      <>
      <Navbar/>

      <div className="home__body">
        <img src="https://i.ibb.co/7yKNCgd/Whats-App-Image-2022-10-23-at-8-51-33-PM.jpg" alt="Whats-App-Image-2022-10-23-at-8-51-33-PM" border="0" />
     <div className="home__inputContainer">
          <Search/>
        </div>  
      </div>
    </>
  );
}

export default Home;
