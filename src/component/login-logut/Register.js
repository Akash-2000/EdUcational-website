import React from "react";
import axios from "axios"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useNavigate} from 'react-router-dom';
import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Context } from "../../context/context";
import { useContext } from "react";



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
    <Form className="col-lg-6 offset-lg-3" autoComplete="off" onSubmit={handleSubmit}>
        <h1 className="text-center">Register</h1>
        <Form.Group className="mb-3" controlId="username">
        <Form.Label>Uername</Form.Label>
        <Form.Control type="text" placeholder="Enter username"
        value={name}
        onChange={handelChange}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email"
        value={email}
        onChange={handelChange1}/>
        </Form.Group>
         
         <Form.Group>
        <Form.Label>Date of Birth</Form.Label>
     <Form.Control type="date" value= {date_of_birth}
    onChange={handelChange2}/> 
        </Form.Group>
    <Form.Group className="mb-3 mt-3">
    <Form.Select aria-label="Default select example"
    name="country" value= {country} onChange={handelChange3}>
      <option>Select country</option>
      <option value="India">India</option>
      <option value="China">China</option>
      <option value="Japan">Japan</option>
    </Form.Select>
    </Form.Group>
    <Form.Group className="mb-3">
        <Form.Label className="mb-3">Gneder</Form.Label>
         <Form.Check 
            type='radio'
            label="Male"
            onClick={handelChange4} name="gender" value={'male'}/> 
        <Form.Check
            type='radio'
            label="female"
          onClick={handelChange4} name="gender" value={'female'}/>
    </Form.Group>
    
    <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" 
        onChange={handelChange5}
    name="password"
    value= {password}/>
      </Form.Group>

       <Form.Group className="mb-3">
        <Form.Label> Confrim Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={handelChange6}
    name="confrim_password"
    value= {confrim_password}/>
      </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Save Passwords" />
        </Form.Group>
        <Button variant="primary" type="submit">
        Submit
        </Button>
    </Form>
  )
}

export default Register;