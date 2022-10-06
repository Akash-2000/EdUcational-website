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
      const {user} = useContext(Context)
      console.log(user)
     const handelChange = (e)=>{
    setotp(e.target.value)
  }
    const handlesubmit = (e)=>{
    e.preventDefault()
    const arr={"otp": otp}
     axios.post(`http://localhost:5000/api/auth/verifyotp/${user}`,arr).then((res)=>{
            if(res.statusText ==="OK"){
                alert("email sent sucessfully")

        }
        else{
               alert(res["data"]["error"]) 
            }
    })
  }
  return (
   <Form className="col-lg-6 offset-lg-3" autoComplete="off" onSubmit={handlesubmit}>
      <h1 className="text-center">Verify Otp</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter OTP</Form.Label>
        <Form.Control type="text" placeholder="Enter otp"
        value={otp}
        onChange={handelChange} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}