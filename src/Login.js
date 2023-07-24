import React from 'react'
import { Link } from 'react-router-dom'
import Validation from'./LoginValidation'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function Login() {
  const [values,setvalues] = useState({
    email: '',
    password:''
  })
  const [errors,seterrors] = useState({})
  const navigate = useNavigate();

  const handleInput = (event) => {
    setvalues(prev => ({...prev,[event.target.name]:[event.target.value]}))}

  const handleSubmit = (event) => 
  {
    event.preventDefault();
    seterrors(Validation(values));
   // if(errors.name === "" && errors.email === "" && errors.password === "")
   // {
      axios.post('http://localhost:3001/login',values)
      .then(res =>{
        console.log(values);
        
        navigate('/home')})
      .catch(err => console.log(err));
   // }
  }
  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
          <div className='bg-white p-3 rounded w-25'>
              <form action="" onSubmit={handleSubmit}>
                  <div className="form-group">
                      <label for="email">Email</label>
                      <input type="email" className="form-control" onChange={handleInput} id="email" name="email" placeholder="Enter email"/>
                      {errors.email && <span className='text-danger'> {errors.email} </span>}
                  </div>
                  <div className="form-group">
                      <label for="password">Password</label>
                      <input type="password" className="form-control" onChange={handleInput} id="password" name="password" placeholder="Enter password"/>
                      {errors.password && <span className='text-danger'> {errors.password} </span>}
                  </div>
                  <button type="submit" className="btn btn-success w-100"><strong>Login</strong></button>
                  <p>You are agree to terms and policies</p>
                  <Link to="/signup" type="button" className="btn btn-default border w-100 bg-light">Create Account</Link>
              </form>
      </div>
    </div>
  )
}

export default Login
