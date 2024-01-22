import { Link } from 'react-router-dom';

const Lounge = () => {
    return (
        <section className='h-screen flex items-center justify-center'>
            <div className='flex flex-col gap-4 w-full max-w-[400px] bg-blue-900 p-6 text-white'>
                <h1 className='text-xl font-semibold'>The Lounge</h1>
                <p>Admins, Editors, and Users can hang out here.</p>

                <Link to='/home' className='underline'>Home</Link>
            </div>
        </section>
    )
}

export default Lounge;