import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from '@mui/material';
import Navbar from "./components/Navbar"
import { Feed } from "./components";

const Youtube = () => (
  
    <div>
    <div class="row">
   
    </div>
    <div class="row">
    <Box sx={{ backgroundColor: '#000' }}>
      
     <Navbar />  
    <Feed/>
  </Box>
  </div>
  </div>
);
export default Youtube;
