import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { propTypes } from 'react-bootstrap/esm/Image';
import {useNavigate} from 'react-router-dom';
 import axios from "axios"
import { useContext } from 'react';
import { Context } from '../../context/context';

export default function Verifiyotp() {
  let Navigate = useNavigate()
    const [otp,setotp] = useState("")
    const [newpassword,setnewpassword]=useState("")
      const {user} = useContext(Context)
      console.log(user)
     const handelChange = (e)=>{
    setotp(e.target.value)
  }

  const handelChange1 = (e)=>{
    setnewpassword(e.target.value)
  }
    const handlesubmit = (e)=>{
    e.preventDefault()
    const arr={"otp": otp,"password":newpassword}
     axios.post(`https://educationbackend.herokuapp.com/api/auth/verifyotp/${user}`,arr).then(res=>{alert(res.data.error)})
     Navigate("/login")
  }
  return (
  <div className="totalDiv1">
   <Form className="col-lg-6 offset-lg-3" autoComplete="off" onSubmit={handlesubmit}>
      <h1 className="text-center text-light">Verify Otp</h1>
      <Form.Group className="mb-3 text-light" controlId="formBasicEmail">
        <Form.Label>Enter OTP</Form.Label>
        <Form.Control type="text" placeholder="Enter otp"
        value={otp}
        onChange={handelChange} autoComplete="off"/>
      </Form.Group>
      <Form.Group className="mb-3 text-light" controlId="formBasicEmail">
        <Form.Label>Enter New password</Form.Label>
        <Form.Control type="password" placeholder="Enter otp"
        value={newpassword}
        onChange={handelChange1} autoComplete="off"/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  );
}