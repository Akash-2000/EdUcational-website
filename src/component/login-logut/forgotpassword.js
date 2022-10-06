import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { propTypes } from 'react-bootstrap/esm/Image';
import {useNavigate} from 'react-router-dom';
 import axios from "axios"
import { useContext } from 'react';
import { Context } from '../../context/context';

function Forgotpassword(props) {
  const {user,dispatch,isFetching} = useContext(Context)
  const Navigate = useNavigate()
  const [email, setemail] = useState("");
  console.log(user)
  const handelChange = (e)=>{
    setemail(e.target.value)
  }
  const handlesubmit = (e)=>{
    e.preventDefault()
     dispatch({type:"LOGIN_START"})
    const arr={"email": email}
     axios.post("http://localhost:5000/api/auth/forgotpassword",arr).then((res)=>{
      console.log(res)
       let userobj = (JSON.parse(res.config.data))
            if(res.statusText ==="OK"){
                alert("email sent sucessfully")
                 dispatch({type:"LOGIN_SUCESS",payload:userobj.email})
                 Navigate("/verify")

        }
        else{
                dispatch({type:"LOGIN_FAILURE"})
               alert(res["data"]["error"]) 
            }
    })
    console.log(user)
  }
return (
    <Form className="col-lg-6 offset-lg-3" autoComplete="off" onSubmit={handlesubmit}>
      <h1 className="text-center">Forgot Password</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="text" placeholder="Enter email"
        value={email}
        onChange={handelChange} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Forgotpassword;