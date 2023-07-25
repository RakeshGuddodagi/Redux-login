import React from 'react'
import Login from './components/Login'
import "./App.css"
import Logout from './components/Logout'
import { useSelector } from 'react-redux'
import { selectUser } from './redux/userSlice'

export default function App() {
  const user = useSelector(selectUser)
  
  return (
    <div>
      {!user ?
        <Login /> :
        <Logout />
      }
    </div>
  )
}

