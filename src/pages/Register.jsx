import { useState, useRef, useEffect } from 'react';
import { FaCheck } from "react-icons/fa6";
import { FaTimes, FaInfoCircle } from "react-icons/fa";

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

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

    const [errMsg, seterrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        usernameRef.current.focus();
    }, []);

    useEffect(() => {
        const result = USER_REGEX.test(username);
        console.log(username, result);
        setValidUsername(result);
    }, [username]);

    useEffect(() => {
        const result = PWD_REGEX.test(password);
        console.log(password, result);
        setValidPassword(result);
        const match = password === matchPassword;
        setValidMatch(match);
    }, [password, matchPassword]);

    useEffect(() => {
        seterrMsg('');
    }, [username, password, matchPassword]);

    return (
        <section className='w-1/3 mx-auto flex flex-col'>
            <p ref={errRef} className={errMsg ? 'text-red-600 font-medium' : 'sr-only'} aria-live='assertive'>{errMsg}</p>
            <h1 className='text-2xl'>Register</h1>

            <form>
                <div className=''>
                    <div className='flex flex-col'>
                        <label htmlFor="username">
                            Username:
                            <span className={validUsername ? 'flex' : 'hidden'}>
                                <FaCheck />
                            </span>
                            <span className={validUsername || !username ? 'hidden' : 'flex'}>
                                <FaTimes />
                            </span>
                        </label>
                        <input
                            type="text"
                            id='username'
                            className='py-1 px-2 border border-gray-300 rounded-md'
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
                        <div id='usernamenote' className={usernameFocus && username && !validUsername ? 'text-xs' : 'sr-only'}>
                            <FaInfoCircle />
                            4 to 24 characters. <br />
                            Must begin with a letter. <br />
                            Letters, numbers, underscores, hyphens allowed.
                        </div>
                    </div>

                    <div className='flex flex-col'>
                        <label htmlFor="password">
                            Password:
                            <span className={validPassword ? 'flex' : 'hidden'}>
                                <FaCheck />
                            </span>
                            <span className={validPassword || !password ? 'hidden' : 'flex'}>
                                <FaTimes />
                            </span>
                        </label>
                        <input
                            type="password"
                            id='password'
                            className='py-1 px-2 border border-gray-300 rounded-md'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            aria-invalid={validPassword ? 'false' : 'true'}
                            aria-describedby='password-note'
                            onFocus={() => setPasswordFocus(true)}
                            onBlur={() => setPasswordFocus(false)}
                        />
                        <div id='password-note' className={passwordFocus && !validPassword ? 'text-xs' : 'sr-only'}>
                            <FaInfoCircle />
                            8 to 24 characters. <br />
                            Must include uppercase and lowercase letters, a number and a special character. <br />
                            Allowed special characters: <span aria-label='exclamation mark'>!</span> <span aria-label='hashtag'>#</span> <span aria-label='at symbol'>@</span> <span aria-label='dollar sign'>$</span> <span aria-label='percent'>%</span>
                        </div>
                    </div>

                    <div className='flex flex-col'>
                        <label htmlFor="confirm-password">
                            Confirm Password:
                            <span className={validMatch && matchPassword ? 'flex' : 'hidden'}>
                                <FaCheck />
                            </span>
                            <span className={validMatch || !matchPassword ? 'hidden' : 'flex'}>
                                <FaTimes />
                            </span>
                        </label>
                        <input
                            type="password"
                            id='confirm-password'
                            className='py-1 px-2 border border-gray-300 rounded-md'
                            value={matchPassword}
                            onChange={(e) => setMatchPassword(e.target.value)}
                            required
                            aria-invalid={validMatch ? 'false' : 'true'}
                            aria-describedby='confirm-note'
                            onFocus={() => setMatchFocus(true)}
                            onBlur={() => setMatchFocus(false)}
                        />
                        <div id='confirm-note' className={matchFocus && !validMatch ? 'text-xs' : 'sr-only'}>
                            <FaInfoCircle />
                            Must match the first password input field.
                        </div>
                    </div>
                </div>

                <button className='bg-gray-200 text-gray-700 rounded-md w-full py-2 mt-4' disabled={!validUsername || !validPassword || !validMatch ? true : false}>Sign Up</button>
            </form>
        </section>
    )
}

export default Register;