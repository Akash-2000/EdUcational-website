import { useState } from "react"
import "./write.css"
import axios from "axios"
import Navbar from "../../Navbar/navbar"
import { useContext } from "react"
import { Context } from "../../../context/context"

export default function Write() {
  const [title,settitle] = useState("")
    const [desc,setdesc] = useState("")
      const [file,setfile] = useState(null)
          const {user,dispatch,isFetching} = useContext(Context)
      const handlesubmit = async(e)=>{

          console.log(user)
        e.preventDefault();
        const newpost = {
          email:user,
          title,
          desc,
        };
        if(file){
          const data =new FormData();
          const filename = Date.now() +file.name;
          data.append("name",filename)
          data.append("file",file)
          newpost.photo = filename;
          try {
            console.log("i tried to  put")
            await axios.post("https://educationbackend.herokuapp.com/api/upload",data)
            console.log("i compledr to  put")
          } catch (err) {
            console.log(err)
          }
        }
        try{
          console.log(newpost)
            const res = await axios.post("https://educationbackend.herokuapp.com/api/post/blog",newpost)
            console.log("i complete  post")
            window.location.replace(`/post/${res.data._id}`)
        }catch(err){
          console.log(err)
        }
      }
  return (
    <>
    <Navbar/>
    <div className="write">
      {file &&(
          <img  className="writeimg" src={URL.createObjectURL(file)}/>
      ) }
      
      <form className="writerom" on onSubmit={handlesubmit}>
        <div class="writinggroup">
          <label htmlFor="fileinput">
            <i class="writeicon fa-solid fa-square-plus"></i>
          </label>
          <input type="file" id="fileinput" style={{ display: "none" }} onChange={e =>setfile(e.target.files[0])}/>
          <input type="text" placeholder="Title" className="writeinput" autoFocus={true}
          onChange={e =>settitle(e.target.value)} 
          />
        </div>
        <div className="writinggroup">
          <textarea placeholder="Tell your story.." type="text" className="writeinput Writetext"
          onChange={e =>setdesc(e.target.value)}></textarea>
        </div>
        <button className="writesubmit" type="submit">Publish</button>
      </form>
    </div>
    </>
  )
}
