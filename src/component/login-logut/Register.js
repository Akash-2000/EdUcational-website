import React from "react";
import axios from "axios"
import "./register.css"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useNavigate} from 'react-router-dom';
import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Context } from "../../context/context";
import { useContext } from "react";
import Navbar from "../../component/Navbar/navbar"


function Register(props){
    const {user,dispatch,isFetching} = useContext(Context)
   let Navigate = useNavigate() 
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [date_of_birth,setdate_of_birth] = useState("");
  const[country,setcountry] = useState("");
  const[gender,setgender]=useState("");
  const[password,setpassword]=useState("");
  const[confrim_password,setconfrim_password]=useState("");
  //Nawe
  const handelChange = (e)=>{
    setname(e.target.value)
  }
  //email
  const handelChange1 = (e)=>{
    setEmail(e.target.value)
  }
  //date
  const handelChange2 = (e)=>{
    setdate_of_birth(e.target.value)
  }
  //country
  const handelChange3 = (e)=>{
    setcountry(e.target.value)
  }
  //gender
  const handelChange4 = (e)=>{
    setgender(e.target.value)
  }
  //
  const handelChange5 = (e)=>{
    setpassword(e.target.value)
  }
   const handelChange6 = (e)=>{
    setconfrim_password(e.target.value)
  }

      const handleSubmit = async(e)=>{
    e.preventDefault()
     dispatch({type:"LOGIN_START"})
    const arr = {"name":name,"email":email,"password":password}
    console.log(arr)
     axios.post("http://localhost:5000/api/auth/register",arr).then((res)=>{
          let userobj = (JSON.parse(res.config.data))
            if(res.statusText ==="OK"){
                alert("sucessfully registered")
                  dispatch({type:"LOGIN_SUCESS",payload:userobj})
                Navigate("/Login")
            }
            else{
               dispatch({type:"LOGIN_FAILURE"})
               alert(res["data"]["error"]) 
            }
        })
  } 
  return(
    <div className="totalDiv2">
    <Navbar/>
    <Form className="col-lg-6 offset-lg-3 bg-black" autoComplete="off" onSubmit={handleSubmit}>
        <h1 className="text-center text-light">Register</h1>
        <Form.Group className="mb-3 borderRadi" controlId="username">
        <Form.Label className="text-light">Uername</Form.Label>
        <Form.Control type="text" placeholder="Enter username"
        value={name}
        onChange={handelChange}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
        <Form.Label className="text-light">Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email"
        value={email}
        onChange={handelChange1}/>
        </Form.Group>
         
         <Form.Group controlId="Dob">
        <Form.Label className="text-light">Date of Birth</Form.Label>
     <Form.Control type="date" value= {date_of_birth}
    onChange={handelChange2}/> 
        </Form.Group>
    <Form.Group className="mb-3 mt-3" controlId="country">
    <Form.Select aria-label="Default select example"
    name="country" value= {country} onChange={handelChange3}>
      <option className="text-light">Select country</option>
      <option value="India">India</option>
      <option value="China">China</option>
      <option value="Japan">Japan</option>
    </Form.Select>
    </Form.Group>
    <Form.Group className="mb-3">
        <Form.Label className="mb-3 text-light">Gneder</Form.Label>
         <Form.Check className="text-light"
            type='radio'
            label="Male"
            onClick={handelChange4} name="gender" value={'male'}/> 
        <Form.Check className="text-light"
            type='radio'
            label="female"
          onClick={handelChange4} name="gender" value={'female'}/>
    </Form.Group>
    
    <Form.Group className="mb-3" controlId="pass">
        <Form.Label className="text-light">Password</Form.Label>
        <Form.Control type="password" placeholder="Password" 
        onChange={handelChange5}
    name="password"
    value= {password}/>
      </Form.Group>

       <Form.Group className="mb-3" controlId="cpass">
        <Form.Label className="text-light"> Confrim Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={handelChange6}
    name="confrim_password"
    value= {confrim_password}/>
      </Form.Group>
    <Button variant="primary" type="submit" >
        Submit
        </Button>
    </Form>
    </div>
  )
}

export default Register;