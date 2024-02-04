import React from 'react';
import { useState , useContext } from 'react';
import UserContext from '../Context/UserContext.js'

const Login = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({username,password})
    }
    
    return (
        <div className=' bg-black text-white w-screen h-screen flex items-center justify-center'>
            <div>
            <h2 className='text-4xl mb-4 ml-10'>Login</h2>
            <input type='text' placeholder='username' value={username} onChange={(e) => setUsername(e.target.value)} className='text-red-500'/>
            <br />
            <input type='password' placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} className='text-red-500'/>
            <br />
            <button onClick={handleSubmit} className=' bg-red-300 mt-2 p-2 rounded ml-10'>Submit</button>
            </div>
        </div>
    );
}

export default Login;
