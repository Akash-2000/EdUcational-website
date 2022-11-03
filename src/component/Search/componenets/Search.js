import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";
import "./Search.css";
import { useStateValue } from "../stateProvider";
import {useNavigate } from "react-router-dom";
import { actionTypes } from "../reducer";

function Search({ hideButtons = false }) {
  const [{}, dispatch] = useStateValue();
  const history = useNavigate();
  const [term, setTerm] = useState("");

  const search = (e) => {
    e.preventDefault();
    console.log("search!");

    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: term,
    
    });

    history(`/search_page`);
  };
  return (
    <div className="total_div">
    <form className="search">
      <div className="search__input">
        <SearchIcon className="search__inputIcon"  onClick={search}/>
        <input value={term} onChange={(e) => setTerm(e.target.value)}  placeholder="Feel Stuck! search here " />
        <MicIcon />
      </div>
    </form>
    </div>
  );
}

export default Search;
