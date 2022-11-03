import React from "react";
import Navbar from "../Navbar/navbar";
import "./login.css"
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import { propTypes } from 'react-bootstrap/esm/Image';
import {Link} from 'react-router-dom';
import { Context } from "../../context/context";
import LoginButt from "./loginbut";
import LinkedInPage from "./linkedin"
import axios from "axios"
import { useContext } from "react";
import GitLogin from "./github-login/gitLogin";
import context from "react-bootstrap/esm/AccordionContext";

function Login(props) {
  let Navigate = useNavigate()
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const handelChange = (e)=>{
    setemail(e.target.value)
  }
  const handelChange1 = (e)=>{
    setpassword(e.target.value)
  }
  const {user,dispatch,isFetching} = useContext(Context)
  if(user!=null){
    Navigate("/")
  }

  const handlesubmit = (e)=>{
    e.preventDefault()
    dispatch({type:"LOGIN_START"})
    const arr={"email":email,"password":password}
      axios.post("http://localhost:5000/api/auth/login",arr).then((res)=>{
       let userobj = (JSON.parse(res.config.data))
          console.log(userobj.email);
            if(res.data.status ==="ok"){
                alert("sucessfully LOGGED")
               dispatch({type:"LOGIN_SUCESS",payload:userobj.email})
                Navigate("/")
            }
            else{
                dispatch({type:"LOGIN_FAILURE"})
               alert(res["data"]["error"]) 
            }
        })
    
  }
  console.log(user)
  return (
    <div>
    <div className="totalDiv1">
    <Navbar/>
    <Form className="col-lg-6 offset-lg-3" autoComplete="off" onSubmit={handlesubmit} >
      <h1 className="text-center text-light">Login</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="text-light">Email</Form.Label>
        <Form.Control type="email" class="forminput" placeholder="Enter email"
        value={email}
        onChange={handelChange} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label  className="text-light">Password</Form.Label>
        <Form.Control type="password" placeholder="Password"
        value={password}
        onChange={handelChange1} />
      </Form.Group>
      <Button variant="primary" type="submit" controlId="formButton">
        Submit
      </Button>
      <Form.Group>
        <hr/>
        <br>

        </br>
        </Form.Group>
      <div>
  <div class="row">
    <div class="col-sm">
          <LoginButt />    
    </div>
    <div class="col-sm">
          <LinkedInPage />    
    </div>
    <div class="col-sm">
       <GitLogin/> 
    </div>
  </div>
</div>
      <div className="d-flex flex-column">
      <div>
      <button className="btn btn-primary mt-2">
       <Link  className="text-light borderRad1"to="/fpassword">Forgot password?</Link>
      </button>
      </div>
      <div className="mt-2">
      <button className=" btn btn-primary">
      <Link to="/register" className="text-center text-light borderRad1">Dont have a account?sign in!</Link> 
      </button>
      </div>
      </div>
          </Form>
          </div>
  </div>
  );
}

export default Login;