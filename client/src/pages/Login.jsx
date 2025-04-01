import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

export default function Login() {
  axios.defaults.withCredentials = true
  const navigate = useNavigate()
  const [values, setValues] = useState('')
  const handleOnChange = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: [e.target.value] }))
  }
  const handleOnSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:8080/login/', values)
      .then((result) => { console.log(result.data) })
      .catch((err) => { console.log(err) })
    // navigate('/')
  }
  return (
    <>
      <h1>Login Page</h1>
      <form onSubmit={handleOnSubmit}>
        <input type='text' name='username' onChange={handleOnChange} />
        <input type='text' name='password' onChange={handleOnChange} />
        <button>Login</button>
      </form>
      <Link to={`/register`}>Register</Link>
    </>
  )
}
