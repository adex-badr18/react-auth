import { Link } from 'react-router-dom';

const Admin = () => {
    return (
        <section className='h-screen flex items-center justify-center'>
            <div className='flex flex-col gap-4 w-full max-w-[400px] bg-blue-900 p-6 text-white'>
                <h1 className='text-xl font-semibold'>Admin's Page</h1>
                <p>You must have been assigned an admin role.</p>

                <Link to='/home' className='underline'>Home</Link>
            </div>
        </section>
    )
}

export default Admin