import { Link } from 'react-router-dom';

const LinkPage = () => {
    return (
        <section className='h-screen flex items-center justify-center'>
            <div className='flex flex-col gap-4 w-full max-w-[400px] bg-blue-900 p-6 text-white'>
                <h1 className='text-xl font-semibold'>Links</h1>

                <div>
                    <h1 className='text-xl font-semibold'>Public</h1>
                    <div className='flex gap-2'>
                        <Link to='/login' className='underline'>Login</Link>
                        <Link to='/register' className='underline'>Register</Link>
                    </div>
                </div>

                <div>
                    <h1 className='text-xl font-semibold'>Private</h1>
                    <div className='flex gap-2'>
                        <Link to='/home' className='underline'>Home</Link>
                        <Link to='/editor' className='underline'>Editor</Link>
                        <Link to='/admin' className='underline'>Admin</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LinkPage;