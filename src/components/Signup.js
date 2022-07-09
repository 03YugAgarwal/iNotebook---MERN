import {React, useState} from 'react'
import {useNavigate } from "react-router-dom"

const Signup = () => {

    const [credentials, setCredentials] = useState({name:"",email: "",password: "",cpassword: ""})

    let navigate = useNavigate();


    const handleSubmit = async (e)=>{
        e.preventDefault();
        const {name,email,password} = credentials;
        const response = await fetch("http://localhost:5000/api/auth/createUser", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({name,email,password})
          });
          const json = await response.json();
          if(json.success){
              //redirect
                localStorage.setItem('token',json.authToken)
                navigate("/");
          }
          else{
            alert("Password is not same as Confirm Password")
          }
    }

    const onChange= (e)=>{  
        setCredentials({...credentials,[e.target.name]: e.target.value})
    }

  return (
    <>
    <form onSubmit={handleSubmit}>
        
        <div className="login">
            <label htmlFor="name-text" className="login-label" >Name</label>
            <input type="text" className="login-input" name="name" value={credentials.name } onChange={onChange} id="name" required/>
            <label htmlFor="email-text" className="login-label" >Email Address</label>
            <input type="email" className="login-input" name="email" value={credentials.email } onChange={onChange} id="email" required/>
            <label htmlFor="password-text" className="login-label">Password</label>
            <input type="password" className="login-input" name="password" value={credentials.password}  onChange={onChange} id="password" minLength={8} required/>
            <label htmlFor="password-text" className="login-label">Confirm Password</label>
            <input type="password" className="login-input" name="cpassword" value={credentials.cpassword}  onChange={onChange} id="cpassword" minLength={8} required/>
            <button type='submit' className='login-button' >Submit</button>
        </div>
    </form>
    </>
  )
}

export default Signup