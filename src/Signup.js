import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Validation from './SignupValidation'
import { useState } from 'react'
import axios from 'axios'
function Signup() {
  const [values,setValues] = useState({
    name: '',
    email: '',
    password:''
  })
  const [errors,setErrors] = useState({})
  const navigate = useNavigate();
  const handleInput = (event) => {
    setValues(prev => ({...prev,[event.target.name]:[event.target.value]}))}

  const handleSubmit = (event) => 
  {
    event.preventDefault();
    setErrors(Validation(values));
   // if(errors === {})
   // {
      axios.post('http://localhost:3001/signup',values)
      .then(res =>{navigate('/login')})
      .catch(err => console.log(err));
   // }
    //else{
     // console.log("Error", errors);
    //}
  }
  return (
    <div>
      <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
          <div className='bg-white p-3 rounded w-25'>
              <form action='' onSubmit={handleSubmit}>
              <div className="form-group">
                      <label for="name">Name:</label>
                      <input type="text" className="form-control" id="name" name='name' onChange={handleInput} placeholder="Enter Name"/>
                      {/* {errors.name && <span className='text-danger'> {errors.name?errors.name : ""} </span>} */}

                  </div>
                  <div className="form-group">
                      <label for="email">Email:</label>
                      <input type="email" className="form-control" id="email" name='email' onChange={handleInput} placeholder="Enter email"/>
                      {/* {errors.email && <span className='text-danger'> {errors.email?errors.email : ""} </span>} */}

                  </div>
                  <div className="form-group">
                      <label for="password">Password:</label>
                      <input type="password" className="form-control" id="password" onChange={handleInput} name='password' placeholder="Enter password"/>
                      {/* {errors.password && <span className='text-danger'> {errors.password?errors.password : ""} </span>} */}
                  </div>
                  <button type="submit" className="btn btn-primary">Signup</button>
                  <p>You are agree to our terms and policies</p>
                  <Link to="/login" type="button" className="btn btn-primary">Login</Link>
              </form>
      </div>
    </div>
    </div>
  )
}

export default Signup
