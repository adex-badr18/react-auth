import { useState, useRef, useEffect } from 'react';
import { FaCheck } from "react-icons/fa6";
import { FaTimes, FaInfoCircle } from "react-icons/fa";
import axios from '../api/axios';

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = '/register';

const Login = () => {
    const usernameRef = useRef();
    const errRef = useRef();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrorMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        usernameRef.current?.focus();
    }, []);

    useEffect(() => {
        setErrorMsg('');
    }, [username, password]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(username, password);
        setUsername('');
        setPassword('');
        setSuccess(true);

        // try {
        //     const response = await axios.post(REGISTER_URL,
        //         { username, password },
        //         {
        //             headers: { 'Content-Type': 'application/json' },
        //             withCredentials: true
        //         }
        //     );

        //     console.log(response);
        //     console.log(response.data);
        //     console.log(response.accessToken);
        //     setSuccess(true);
        //     // Clear input fields
        // } catch (error) {
        //     if (!error?.response) {
        //         setErrorMsg('No Server Response');
        //     } else if (error.response?.status === 400) {
        //         setErrorMsg('Username Taken');
        //     } else {
        //         setErrorMsg('Registration Failed!');
        //     }
        //     errRef.current.focus();
        // }
    }

    return (
        <>
            {
                success ?
                    (
                        <section className='h-screen flex items-center justify-center'>
                            <div className='w-full max-w-[400px] bg-blue-900 p-6'>
                                <h1 className='text-2xl text-white mb-2 font-semibold'>You're logged in!</h1>
                                <p className=''>
                                    <a href="#" className='underline decoration-solid text-white'>Go to Home</a>
                                </p>
                            </div>
                        </section>
                    ) :
                    (
                        <section className='h-screen flex items-center justify-center'>
                            <div className='w-full max-w-[400px] bg-blue-900 p-6'>
                                <p ref={errRef} className={errMsg ? 'text-red-700 bg-red-200 p-2 text-sm font-medium mb-2' : 'sr-only'} aria-live='assertive'>{errMsg}</p>
                                <h1 className='text-3xl text-white mb-4 font-semibold'>Sign In</h1>

                                <form onSubmit={handleSubmit}>
                                    <div className='flex flex-col gap-5'>
                                        <div className='flex flex-col gap-1'>
                                            <label htmlFor="username" className='flex items-center gap-1 text-white'>
                                                Username:
                                            </label>
                                            <input
                                                type="text"
                                                id='username'
                                                className='py-1 px-2 border border-gray-300 rounded-md focus:outline-none'
                                                ref={usernameRef}
                                                autoComplete='off'
                                                value={username}
                                                onChange={(e) => setUsername(e.target.value)}
                                                required
                                            />
                                        </div>

                                        <div className='flex flex-col gap-1'>
                                            <label htmlFor="password" className='flex items-center gap-1 text-white'>
                                                Password:
                                            </label>
                                            <input
                                                type="password"
                                                id='password'
                                                className='py-1 px-2 border border-gray-300 rounded-md focus:outline-none'
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <button className='bg-gray-200 text-gray-900 font-medium rounded-md w-full py-2 mt-6 cursor-pointer hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed' disabled={!username || !password ? true : false}>Sign In</button>
                                </form>

                                <p className='flex flex-col sm:flex-row gap-1 mt-3 text-white'>
                                    Don't have an account?
                                    <span className=''>
                                        {/* router link below */}
                                        <a href="#" className='underline decoration-solid'>Sign Up</a>
                                    </span>
                                </p>
                            </div>
                        </section>
                    )
            }
        </>
    )
}

export default Login;