import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Login() {
  axios.defaults.withCredentials = true
  return (
    <>
      <h1>Login Page</h1>
      <Link to={`/register`}>Register</Link>
    </>
  )
}
