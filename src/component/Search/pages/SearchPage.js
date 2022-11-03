import React from "react";
import { useStateValue } from "../stateProvider";
import useGoogleSearch from "../useGoogleSearch";
import "./SearchPage.css";
import Search from "../componenets/Search";
import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from "@material-ui/icons/Description";
import Navbar from "../../Navbar/navbar";
import ImageIcon from "@material-ui/icons/Image";
import VideoLibrarySharpIcon from '@mui/icons-material/VideoLibrarySharp';
import RoomIcon from "@material-ui/icons/Room";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Link } from "react-router-dom";

function SearchPage() {
  const [{ term }, dispatch] = useStateValue();

  const { data } = useGoogleSearch(term);

  console.log(data);

  return (
    <div className="searchPage">
      <Navbar/>
      <div className="searchPage__header">
        <Link to="/">
           <img class="searchimg"src="https://i.ibb.co/7yKNCgd/Whats-App-Image-2022-10-23-at-8-51-33-PM.jpg" alt="Whats-App-Image-2022-10-23-at-8-51-33-PM" border="0" />
        </Link>

        <div className="searchPage__headerBody">
          <Search hideButtons />
          <div className="searchPage__options">
            <div className="searchPage__optionsLeft">
              <div className="searchPage__option">
                <SearchIcon />
                <Link to="/all">All</Link>
              </div>
              <div className="searchPage__option">
                <DescriptionIcon />
                <Link to="/news">News</Link>
              </div>
              <div className="searchPage__option">
                <ImageIcon />
                <Link to="/images">Images</Link>
              </div>
              <div className="searchPage__option">
                <VideoLibrarySharpIcon />
                <Link to="/shopping">Videos</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {term && (
        <div className="searchPage__results">
          <p className="searchPage__resultCount">
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime} seconds) for{" "}
            <strong>{term}</strong>
          </p>

          {data?.items.map((item) => (
            <div className="searchPage__result">
              <a className="searchPage__resultLink" href={item.link}>
                {item.pagemap?.cse_image?.length > 0 &&
                  item.pagemap?.cse_image[0]?.src && (
                    <img
                      className="searchPage__resultImage"
                      src={
                        item.pagemap?.cse_image?.length > 0 &&
                        item.pagemap?.cse_image[0]?.src
                      }
                      alt=""
                    />
                  )}
                {item.displayLink} ▾
              </a>
              <a className="searchPage__resultTitle" href={item.link}>
                <h2>{item.title}</h2>
              </a>

              <p className="searchPage__resultSnippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchPage;
