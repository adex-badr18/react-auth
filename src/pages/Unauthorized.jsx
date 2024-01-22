import { useNavigate } from 'react-router-dom';

const Unauthorized = () => {
    const navigate = useNavigate();

    const goBack = () => navigate(-1);

    return (
        <section className='h-screen flex items-center justify-center'>
            <div className='flex flex-col items-start gap-4 w-full max-w-[400px] bg-blue-900 p-6 text-white'>
                <h1 className='text-xl font-semibold'>Unauthorized</h1>
                <p>You are not authorized to access the requested page.</p>

                <button onClick={goBack} className='px-3 py-2 outline-none rounded-md bg-gray-300 text-gray-900'>Go back</button>
            </div>
        </section>
    )
}

export default Unauthorized;