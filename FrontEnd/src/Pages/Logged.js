import React from 'react'
import Nav from '../Components/Navbar/Nav'
import { useNavigate } from 'react-router-dom'

function Logged() {
    const navigate = useNavigate();
  return (
    <div>
        <Nav osisl/>
        <div className='mt-28 text-center items-center'>
            <div>You are now logged in!</div>
            <a onClick={() => navigate("/")} className='underline text-center'>Go to Home Page!</a>
        </div>
    </div>
  )
}

export default Logged