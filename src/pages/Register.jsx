import { useState, useRef, useEffect } from 'react';
import { FaCheck } from "react-icons/fa6";
import { FaTimes, FaInfoCircle } from "react-icons/fa";
import axios from '../api/axios';

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = '/register';

const Register = () => {
    const usernameRef = useRef();
    const errRef = useRef();

    const [username, setUsername] = useState('');
    const [validUsername, setValidUsername] = useState(false);
    const [usernameFocus, setUsernameFocus] = useState(false);

    const [password, setPassword] = useState('');
    const [validPassword, setValidPassword] = useState(false);
    const [passwordFocus, setPasswordFocus] = useState(false);

    const [matchPassword, setMatchPassword] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrorMsg] = useState('Registration Failed!');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        usernameRef.current.focus();
    }, []);

    useEffect(() => {
        const result = USER_REGEX.test(username);
        // console.log(username, result);
        setValidUsername(result);
    }, [username]);

    useEffect(() => {
        const result = PWD_REGEX.test(password);
        // console.log(password, result);
        setValidPassword(result);
        const match = password === matchPassword;
        setValidMatch(match);
    }, [password, matchPassword]);

    useEffect(() => {
        setErrorMsg('');
    }, [username, password, matchPassword]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // If button is enabled with JS hack
        const usernameValidation = USER_REGEX.test(username);
        const passwordValidation = PWD_REGEX.test(password);

        if (!usernameValidation || !passwordValidation) {
            setErrorMsg('Invalid Entry');
            return;
        }
        setSuccess(true);
        console.log(username, password);

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
                        <section>
                            <h1>Success!</h1>
                            <p>
                                <a href="#">Sign In</a>
                            </p>
                        </section>
                    ) :
                    (
                        <section className='h-screen flex items-center justify-center px-16'>
                            <div className='w-full max-w-[400px] bg-blue-900 p-6'>
                                <p ref={errRef} className={errMsg ? 'text-red-700 bg-red-200 p-2 text-sm font-medium mb-2' : 'sr-only'} aria-live='assertive'>{errMsg}</p>
                                <h1 className='text-3xl text-white mb-4 font-semibold'>Register</h1>

                                <form onSubmit={handleSubmit}>
                                    <div className='flex flex-col gap-5'>
                                        <div className='flex flex-col gap-1'>
                                            <label htmlFor="username" className='flex items-center gap-1 text-white'>
                                                Username:
                                                <span className={validUsername ? 'flex' : 'hidden'}>
                                                    <FaCheck color='#7fb800' />
                                                </span>
                                                <span className={validUsername || !username ? 'hidden' : 'flex'}>
                                                    <FaTimes color='red' />
                                                </span>
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
                                                aria-invalid={validUsername ? 'false' : 'true'}
                                                aria-describedby='usernamenote'
                                                onFocus={() => setUsernameFocus(true)}
                                                onBlur={() => setUsernameFocus(false)}
                                            />
                                            <div id='usernamenote' className={usernameFocus && username && !validUsername ? 'flex gap-2 text-xs bg-black text-white p-1 rounded-md mt-1' : 'sr-only'}>
                                                <FaInfoCircle size={22} />
                                                <div>
                                                    4 to 24 characters. <br />
                                                    Must begin with a letter. <br />
                                                    Letters, numbers, underscores, hyphens allowed.
                                                </div>
                                            </div>
                                        </div>

                                        <div className='flex flex-col gap-1'>
                                            <label htmlFor="password" className='flex items-center gap-1 text-white'>
                                                Password:
                                                <span className={validPassword ? 'flex' : 'hidden'}>
                                                    <FaCheck color='#7fb800' />
                                                </span>
                                                <span className={validPassword || !password ? 'hidden' : 'flex'}>
                                                    <FaTimes color='red' />
                                                </span>
                                            </label>
                                            <input
                                                type="password"
                                                id='password'
                                                className='py-1 px-2 border border-gray-300 rounded-md focus:outline-none'
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                required
                                                aria-invalid={validPassword ? 'false' : 'true'}
                                                aria-describedby='password-note'
                                                onFocus={() => setPasswordFocus(true)}
                                                onBlur={() => setPasswordFocus(false)}
                                            />
                                            <div id='password-note' className={passwordFocus && !validPassword ? 'flex gap-2 text-xs bg-black text-white p-1 rounded-md mt-1' : 'sr-only'}>
                                                <FaInfoCircle size={22} />
                                                <div>
                                                    8 to 24 characters. <br />
                                                    Must include uppercase and lowercase letters, a number and a special character. <br />
                                                    Allowed special characters: <span aria-label='exclamation mark'>!</span> <span aria-label='hashtag'>#</span> <span aria-label='at symbol'>@</span> <span aria-label='dollar sign'>$</span> <span aria-label='percent'>%</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='flex flex-col gap-1'>
                                            <label htmlFor="confirm-password" className='flex items-center gap-1 text-white'>
                                                Confirm Password:
                                                <span className={validMatch && matchPassword ? 'flex' : 'hidden'}>
                                                    <FaCheck color='#7fb800' />
                                                </span>
                                                <span className={validMatch || !matchPassword ? 'hidden' : 'flex'}>
                                                    <FaTimes color='red' />
                                                </span>
                                            </label>
                                            <input
                                                type="password"
                                                id='confirm-password'
                                                className='py-1 px-2 border border-gray-300 rounded-md focus:outline-none'
                                                value={matchPassword}
                                                onChange={(e) => setMatchPassword(e.target.value)}
                                                required
                                                aria-invalid={validMatch ? 'false' : 'true'}
                                                aria-describedby='confirm-note'
                                                onFocus={() => setMatchFocus(true)}
                                                onBlur={() => setMatchFocus(false)}
                                            />
                                            <div id='confirm-note' className={matchFocus && !validMatch ? 'flex gap-2 items-center text-xs bg-black text-white p-1 rounded-md mt-1' : 'sr-only'}>
                                                <FaInfoCircle size={20} />
                                                <span>
                                                    Must match the first password input field.
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <button className='bg-gray-200 text-gray-900 font-medium rounded-md w-full py-2 mt-6 cursor-pointer hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed' disabled={!validUsername || !validPassword || !validMatch ? true : false}>Sign Up</button>
                                </form>

                                <p className='flex flex-col sm:flex-row gap-1 mt-3 text-white'>
                                    Already registered?
                                    <span className=''>
                                        {/* router link below */}
                                        <a href="#" className='underline decoration-solid'>Sign in</a>
                                    </span>
                                </p>
                            </div>
                        </section>
                    )
            }
        </>
    )
}

export default Register;