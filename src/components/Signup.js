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
            <label htmlFor="name-text" className="login-name" >Name</label>
            <input type="text" name="name" value={credentials.name } onChange={onChange} id="name" required/>
            <label htmlFor="email-text" className="login-email" >Email Address</label>
            <input type="email" name="email" value={credentials.email } onChange={onChange} id="email" required/>
            <label htmlFor="password-text" className="login-passowrd">Password</label>
            <input type="password" name="password" value={credentials.password}  onChange={onChange} id="password" minLength={8} required/>
            <label htmlFor="password-text" className="login-passowrd">Confirm Password</label>
            <input type="password" name="cpassword" value={credentials.cpassword}  onChange={onChange} id="cpassword" minLength={8} required/>
            <button type='submit'  >Submit</button>
        </div>
    </form>
    </>
  )
}

export default Signup