import { Link } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../context/AuthProvider';

const PageNotFound = () => {
    const { auth } = useContext(AuthContext);

    console.log(auth);
    
    return (
        <section className='h-screen flex items-center justify-center'>
            <div className='flex flex-col gap-3 w-full max-w-[400px] bg-blue-900 p-6 text-white'>
                <h1 className='text-2xl font-medium text-center'>Error 404 <br /> Page Not Found</h1>
                <Link className='bg-blue-400 hover:bg-blue-500 text-blue-900 hover:text-blue-950 font-medium p-3 text-center' to='/'>Return to Home</Link>
            </div>
        </section>
    )
}

export default PageNotFound