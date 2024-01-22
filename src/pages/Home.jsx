import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Home = () => {
    const { setAuth } = useAuth();
    const navigate = useNavigate();

    const signOut = (e) => {
        e.preventDefault();

        setAuth({});
        navigate('/login', { replace: true });
    }

    return (
        <section className='h-screen flex items-center justify-center'>
            <div className='flex flex-col items-start gap-4 w-full max-w-[400px] bg-blue-900 p-6 text-white'>
                <h1 className='text-xl font-semibold'>Home</h1>
                <p>You are logged in!</p>

                <div className='flex flex-col gap-1'>
                    <Link to='/admin' className='underline'>Admin</Link>
                    <Link to='/editor' className='underline'>Editor</Link>
                    <Link to='/lounge' className='underline'>Lounge</Link>
                    <Link to='/' className='underline'>Link Page</Link>
                </div>

                <button onClick={signOut} className='px-3 py-2 outline-none rounded-md bg-gray-300 text-gray-900'>Sign Out</button>
            </div>
        </section>
    )
}

export default Home;