import React, { useState } from 'react'
import "./login.css"
import { useDispatch } from 'react-redux'
import { login } from '../redux/userSlice'

const Login = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    
    const dispatch = useDispatch();
    
    const handleSubmit =(e)=> {
        e.preventDefault();
        
        dispatch(login({
            name:name,
            email:email,
            password:password,
            loggedIn:true
        })
        );
    };
    return (
        <div className='login'>
            <form className='login_form' onSubmit={(e)=>handleSubmit(e)}>
                <h2>Login</h2>
                <input type='name'
                    placeholder='User Name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input type='email'
                    placeholder='User Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input type='Password'
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="Submit" className='btn'>Submit</button>
            </form>
        </div>
    )
}

export default Login
