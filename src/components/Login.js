import {React, useState} from 'react'
import {useNavigate } from "react-router-dom"

const Login = () => {

    const [credentials, setCredentials] = useState({email: "",password: ""})

    let navigate = useNavigate();


    const handleSubmit = async (e)=>{
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({email: credentials.email,password: credentials.password})
          });
          const json = await response.json();
          if(json.success){
              //redirect
                localStorage.setItem('token',json.authToken)
                navigate("/");
          }
          else{
            alert("wrong credentials")
          }
    }

    const onChange= (e)=>{  
        setCredentials({...credentials,[e.target.name]: e.target.value})
    }


  return (
    <>
    
    <form onSubmit={handleSubmit}>
        
        <div className="login">
            <label htmlFor="email-text" className="login-email" >Email Address</label>
            <input type="email" name="email" value={credentials.email } onChange={onChange} id="email" />
            <label htmlFor="password-text" className="login-passowrd">Password</label>
            <input type="password" name="password" value={credentials.password}  onChange={onChange} id="password" />
            <button type='submit'  >Submit</button>
        </div>
    </form>
    </>
  )
}

export default Login